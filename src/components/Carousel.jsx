import { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import carouselData from "../datas/carouselData";

export default function Custom3DCarousel() {
  const wrapperRef = useRef(null);
  const cardsRef = useRef([]);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const lastX = useRef(0);
  const currentX = useRef(0);
  const velocity = useRef(0);
  const lastTime = useRef(0);
  const momentumAnim = useRef(null);
  const autoplayAnim = useRef(null);
  const animationFrameDrag = useRef(null);

  const [cardWidth, setCardWidth] = useState(360);
  const cardGap = 16;

  useEffect(() => {
    const resize = () => {
      const vw = window.innerWidth;
      const newWidth = Math.min((vw - cardGap * 4) / 3, 540);
      setCardWidth(Math.max(300, newWidth));
    };
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  useEffect(() => {
    const cardCount = carouselData.length;
    const singleSetWidth = (cardWidth + cardGap) * cardCount;

    gsap.set(cardsRef.current, {
      x: (i) => i * (cardWidth + cardGap),
      width: cardWidth,
      height: cardWidth * 0.8,
      position: "absolute",
      transformOrigin: "center center",
    });

    gsap.set(wrapperRef.current, {
      width: singleSetWidth * 3,
    });

    currentX.current = -singleSetWidth;
    gsap.set(wrapperRef.current, { x: currentX.current });
  }, [cardWidth]);

  const wrapPosition = (pos, totalWidth) => {
    while (pos > 0) pos -= totalWidth;
    while (pos < -totalWidth * 2) pos += totalWidth;
    return pos;
  };

  const handleDragStart = (e) => {
    isDragging.current = true;
    e.preventDefault(); // Prevent default browser drag/select
    startX.current = e.type.includes("touch") ? e.touches[0].clientX : e.clientX;
    lastX.current = currentX.current;
    lastTime.current = performance.now();
    velocity.current = 0;
    cancelAnimationFrame(momentumAnim.current);
    cancelAnimationFrame(autoplayAnim.current);
    if (animationFrameDrag.current) cancelAnimationFrame(animationFrameDrag.current);
    gsap.killTweensOf(wrapperRef.current);
  };

  const handleDragMove = (e) => {
    if (!isDragging.current) return;
    e.preventDefault(); // Prevent text selection, image drag, etc.

    const x = e.type.includes("touch") ? e.touches[0].clientX : e.clientX;
    const deltaX = x - startX.current;
    const now = performance.now();
    const deltaTime = now - lastTime.current;

    const singleSetWidth = (cardWidth + cardGap) * carouselData.length;
    const newPos = wrapPosition(lastX.current + deltaX, singleSetWidth);
    currentX.current = newPos;

    // Use requestAnimationFrame to update position smoothly
    if (!animationFrameDrag.current) {
      animationFrameDrag.current = requestAnimationFrame(() => {
        gsap.set(wrapperRef.current, { x: currentX.current });
        animationFrameDrag.current = null;
      });
    }

    if (deltaTime > 0) {
      const newVelocity = (deltaX) / deltaTime * 16;
      velocity.current = velocity.current * 0.8 + newVelocity * 0.2; // Smooth velocity
    }
    lastTime.current = now;
  };

  const handleDragEnd = () => {
    if (!isDragging.current) return;
    isDragging.current = false;

    const singleSetWidth = (cardWidth + cardGap) * carouselData.length;

    const animateMomentum = () => {
      const now = performance.now();
      const dt = now - lastTime.current;
      lastTime.current = now;

      velocity.current *= 0.95;
      if (Math.abs(velocity.current) > 0.1) {
        currentX.current += velocity.current * dt / 16;
        currentX.current = wrapPosition(currentX.current, singleSetWidth);
        gsap.set(wrapperRef.current, { x: currentX.current });
        momentumAnim.current = requestAnimationFrame(animateMomentum);
      } else {
        startAutoplay();
      }
    };

    momentumAnim.current = requestAnimationFrame(animateMomentum);
  };

  useEffect(() => {
    const animate = () => {
      const centerX = window.innerWidth / 2;
      cardsRef.current.forEach((card, i) => {
        const cardCenter = i * (cardWidth + cardGap) + currentX.current + cardWidth / 2;
        const dist = (cardCenter - centerX) / centerX;
        const rotationY = -dist * 8;
        const scale = 1 - Math.min(Math.abs(dist) * 0.15, 0.2);
        const zIndex = 1000 - Math.abs(dist) * 100;

        const glowIntensity = Math.max(0, 1 - Math.abs(dist));
        const boxShadow = `0 0 ${20 * glowIntensity}px ${8 * glowIntensity}px rgba(1,1,1 ${glowIntensity})`;

        gsap.to(card, {
          rotationY,
          scale,
          zIndex,
          boxShadow,
          duration: 0.3,
          ease: "power2.out",
          overwrite: true,
        });
      });
      requestAnimationFrame(animate);
    };
    animate();
  }, [cardWidth]);

  const startAutoplay = () => {
    const singleSetWidth = (cardWidth + cardGap) * carouselData.length;
    const tick = () => {
      currentX.current -= 0.5;
      currentX.current = wrapPosition(currentX.current, singleSetWidth);
      gsap.set(wrapperRef.current, { x: currentX.current });
      autoplayAnim.current = requestAnimationFrame(tick);
    };
    autoplayAnim.current = requestAnimationFrame(tick);
  };

  useEffect(() => {
    startAutoplay();
    return () => {
      cancelAnimationFrame(autoplayAnim.current);
      cancelAnimationFrame(momentumAnim.current);
      if (animationFrameDrag.current) cancelAnimationFrame(animationFrameDrag.current);
    };
  }, [cardWidth]);

  return (
    <div
      className="relative w-full overflow-hidden"
      style={{ height: `${cardWidth * 0.8 + 80}px`, perspective: "1200px" }}
      onMouseDown={handleDragStart}
      onMouseMove={handleDragMove}
      onMouseUp={handleDragEnd}
      onMouseLeave={handleDragEnd}
      onTouchStart={handleDragStart}
      onTouchMove={handleDragMove}
      onTouchEnd={handleDragEnd}
    >
      <div
        ref={wrapperRef}
        className="relative h-full"
        style={{ transformStyle: "preserve-3d" }}
      >
        {[...carouselData, ...carouselData, ...carouselData].map((item, index) => (
          <div
            key={`${item.title}-${index}`}
            ref={(el) => (cardsRef.current[index] = el)}
            className="absolute bg-white rounded-xl overflow-hidden border border-gray-200 cursor-pointer shadow-lg"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-2/3 object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="text-base font-medium">{item.title}</h3>
              <p className="text-sm text-gray-500">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
