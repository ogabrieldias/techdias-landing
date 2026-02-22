"use client"

import { useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export function useGsapScrollTrigger() {
  useEffect(() => {
    // Fade-up animations
    const fadeUpEls = document.querySelectorAll("[data-animate='fade-up']")
    fadeUpEls.forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      )
    })

    // Fade-in animations
    const fadeInEls = document.querySelectorAll("[data-animate='fade-in']")
    fadeInEls.forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      )
    })

    // Slide-left animations
    const slideLeftEls = document.querySelectorAll("[data-animate='slide-left']")
    slideLeftEls.forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, x: -80 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      )
    })

    // Slide-right animations
    const slideRightEls = document.querySelectorAll("[data-animate='slide-right']")
    slideRightEls.forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, x: 80 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      )
    })

    // Scale-up animations
    const scaleUpEls = document.querySelectorAll("[data-animate='scale-up']")
    scaleUpEls.forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, scale: 0.85 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.7,
          ease: "back.out(1.5)",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      )
    })

    // Stagger children animations
    const staggerParents = document.querySelectorAll("[data-animate='stagger']")
    staggerParents.forEach((parent) => {
      const children = parent.children
      gsap.fromTo(
        children,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: parent,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      )
    })

    // Parallax effect
    const parallaxEls = document.querySelectorAll("[data-parallax]")
    parallaxEls.forEach((el) => {
      const speed = parseFloat(el.getAttribute("data-parallax") || "0.3")
      gsap.to(el, {
        yPercent: speed * 100,
        ease: "none",
        scrollTrigger: {
          trigger: el,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      })
    })

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [])
}
