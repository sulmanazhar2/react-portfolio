import React, { useEffect, useRef, useState, useCallback } from "react";

const IsDevice = (() => {
  if (typeof navigator === "undefined") return null;

  const ua = navigator.userAgent;
  const device = {
    info: ua,
    Android: () => ua.match(/Android/i),
    BlackBerry: () => ua.match(/BlackBerry/i),
    IEMobile: () => ua.match(/IEMobile/i),
    iOS: () => ua.match(/iPhone|iPad|iPod/i),
    iPad: () =>
      ua.match(/Mac/) &&
      navigator.maxTouchPoints &&
      navigator.maxTouchPoints > 2,
    OperaMini: () => ua.match(/Opera Mini/i),
  };
  device.any = () =>
    device.Android() ||
    device.BlackBerry() ||
    device.iOS() ||
    device.iPad() ||
    device.OperaMini() ||
    device.IEMobile();
  return device;
})();

function useEventListener(eventName, handler, element = document) {
  const savedHandler = useRef();

  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(() => {
    if (!element || !element.addEventListener) return undefined;

    const eventListener = (event) => savedHandler.current?.(event);
    element.addEventListener(eventName, eventListener);
    return () => {
      element.removeEventListener(eventName, eventListener);
    };
  }, [eventName, element]);
}

function CursorCore({
  outerStyle,
  innerStyle,
  color = "220, 90, 90",
  outerAlpha = 0.3,
  innerSize = 8,
  outerSize = 8,
  outerScale = 6,
  innerScale = 0.6,
  trailingSpeed = 8,
  clickables = [
    "a",
    'input[type="text"]',
    'input[type="email"]',
    'input[type="number"]',
    'input[type="submit"]',
    'input[type="image"]',
    "label[for]",
    "select",
    "textarea",
    "button",
    ".link",
  ],
}) {
  const cursorOuterRef = useRef(null);
  const cursorInnerRef = useRef(null);
  const requestRef = useRef(null);
  const previousTimeRef = useRef();
  const coordsRef = useRef({ x: 0, y: 0 });
  const endX = useRef(0);
  const endY = useRef(0);

  const [isVisible, setIsVisible] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [isActiveClickable, setIsActiveClickable] = useState(false);

  // Hide native cursor (as a proper effect, not during render)
  useEffect(() => {
    const previousCursor = document.body.style.cursor;
    document.body.style.cursor = "none";
    return () => {
      document.body.style.cursor = previousCursor;
    };
  }, []);

  const onMouseMove = useCallback(({ clientX, clientY }) => {
    if (cursorInnerRef.current) {
      cursorInnerRef.current.style.top = `${clientY}px`;
      cursorInnerRef.current.style.left = `${clientX}px`;
    }
    endX.current = clientX;
    endY.current = clientY;
  }, []);

  const animateOuterCursor = useCallback(
    (time) => {
      if (previousTimeRef.current !== undefined) {
        coordsRef.current.x +=
          (endX.current - coordsRef.current.x) / trailingSpeed;
        coordsRef.current.y +=
          (endY.current - coordsRef.current.y) / trailingSpeed;
        if (cursorOuterRef.current) {
          cursorOuterRef.current.style.top = `${coordsRef.current.y}px`;
          cursorOuterRef.current.style.left = `${coordsRef.current.x}px`;
        }
      }
      previousTimeRef.current = time;
      requestRef.current = requestAnimationFrame(animateOuterCursor);
    },
    [trailingSpeed]
  );

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animateOuterCursor);
    return () => cancelAnimationFrame(requestRef.current);
  }, [animateOuterCursor]);

  const onMouseDown = useCallback(() => setIsActive(true), []);
  const onMouseUp = useCallback(() => setIsActive(false), []);
  const onMouseEnterViewport = useCallback(() => setIsVisible(true), []);
  const onMouseLeaveViewport = useCallback(() => setIsVisible(false), []);

  useEventListener("mousemove", onMouseMove);
  useEventListener("mousedown", onMouseDown);
  useEventListener("mouseup", onMouseUp);
  useEventListener("mouseover", onMouseEnterViewport);
  useEventListener("mouseout", onMouseLeaveViewport);

  // Cursor Hover/Active state styling
  useEffect(() => {
    if (!cursorInnerRef.current || !cursorOuterRef.current) return;
    if (isActive) {
      cursorInnerRef.current.style.transform = `translate(-50%, -50%) scale(${innerScale})`;
      cursorOuterRef.current.style.transform = `translate(-50%, -50%) scale(${outerScale})`;
    } else {
      cursorInnerRef.current.style.transform =
        "translate(-50%, -50%) scale(1)";
      cursorOuterRef.current.style.transform =
        "translate(-50%, -50%) scale(1)";
    }
  }, [innerScale, outerScale, isActive]);

  useEffect(() => {
    if (!cursorInnerRef.current || !cursorOuterRef.current) return;
    if (isActiveClickable) {
      cursorInnerRef.current.style.transform = `translate(-50%, -50%) scale(${
        innerScale * 1.2
      })`;
      cursorOuterRef.current.style.transform = `translate(-50%, -50%) scale(${
        outerScale * 1.4
      })`;
    }
  }, [innerScale, outerScale, isActiveClickable]);

  useEffect(() => {
    if (!cursorInnerRef.current || !cursorOuterRef.current) return;
    const opacity = isVisible ? 1 : 0;
    cursorInnerRef.current.style.opacity = opacity;
    cursorOuterRef.current.style.opacity = opacity;
  }, [isVisible]);

  // Clickable elements - properly cleanup listeners by storing references
  useEffect(() => {
    const clickableEls = document.querySelectorAll(clickables.join(","));

    const handlers = {
      mouseover: () => setIsActive(true),
      click: () => {
        setIsActive(true);
        setIsActiveClickable(false);
      },
      mousedown: () => setIsActiveClickable(true),
      mouseup: () => setIsActive(true),
      mouseout: () => {
        setIsActive(false);
        setIsActiveClickable(false);
      },
    };

    clickableEls.forEach((el) => {
      el.style.cursor = "none";
      Object.entries(handlers).forEach(([event, handler]) => {
        el.addEventListener(event, handler);
      });
    });

    return () => {
      clickableEls.forEach((el) => {
        Object.entries(handlers).forEach(([event, handler]) => {
          el.removeEventListener(event, handler);
        });
      });
    };
  }, [clickables]);

  const styles = {
    cursorInner: {
      zIndex: 999,
      display: "block",
      position: "fixed",
      borderRadius: "50%",
      width: innerSize,
      height: innerSize,
      pointerEvents: "none",
      backgroundColor: `rgba(${color}, 1)`,
      ...(innerStyle && innerStyle),
      transition: "opacity 0.15s ease-in-out, transform 0.25s ease-in-out",
    },
    cursorOuter: {
      zIndex: 999,
      display: "block",
      position: "fixed",
      borderRadius: "50%",
      pointerEvents: "none",
      width: outerSize,
      height: outerSize,
      backgroundColor: `rgba(${color}, ${outerAlpha})`,
      transition: "opacity 0.15s ease-in-out, transform 0.15s ease-in-out",
      willChange: "transform",
      ...(outerStyle && outerStyle),
    },
  };

  return (
    <>
      <div ref={cursorOuterRef} style={styles.cursorOuter} />
      <div ref={cursorInnerRef} style={styles.cursorInner} />
    </>
  );
}

function AnimatedCursor(props) {
  if (typeof navigator !== "undefined" && IsDevice && IsDevice.any()) {
    return null;
  }
  return <CursorCore {...props} />;
}

export default AnimatedCursor;
