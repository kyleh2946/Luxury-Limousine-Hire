"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import { ExternalLink, Loader2, RefreshCw } from "lucide-react"

type Phase = "loading" | "loaded" | "retrying" | "failed"

interface BookingEmbedProps {
  bookingUrl: string
}

export function BookingEmbed({ bookingUrl }: BookingEmbedProps) {
  const [phase, setPhase] = useState<Phase>("loading")
  const [attempt, setAttempt] = useState(1)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const mountTime = useRef(0)
  const loadedRef = useRef(false)
  const activeAttemptRef = useRef(attempt)
  activeAttemptRef.current = attempt

  const clearTimer = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current)
      timerRef.current = null
    }
  }

  const iframeSrc =
    attempt === 1 ? bookingUrl : `${bookingUrl}?t=${Date.now()}`

  const startTimer = useCallback(
    (timeoutMs: number, nextPhase: Phase) => {
      clearTimer()
      timerRef.current = setTimeout(() => {
        if (!loadedRef.current) {
          if (process.env.NODE_ENV === "development") {
            console.warn(
              `[Burbank Hire Cars] iframe did not fire onLoad within ${timeoutMs / 1000}s (attempt ${attempt})`
            )
          }
          setPhase(nextPhase)
          if (nextPhase === "retrying") {
            setAttempt((a) => a + 1)
          }
        }
      }, timeoutMs)
    },
    [attempt]
  )

  useEffect(() => {
    mountTime.current = performance.now()
    loadedRef.current = false

    if (process.env.NODE_ENV === "development") {
      console.log(
        `[Burbank Hire Cars] /book mounted at ${mountTime.current.toFixed(0)}ms | attempt ${attempt} | src: ${iframeSrc}`
      )
    }

    if (attempt === 1) {
      setPhase("loading")
      startTimer(12000, "retrying")
    } else if (attempt === 2) {
      setPhase("loading")
      startTimer(15000, "failed")
    } else {
      setPhase("loading")
      startTimer(15000, "failed")
    }

    return clearTimer
  }, [attempt, iframeSrc, startTimer])

  const handleIframeLoad = useCallback(() => {
    if (activeAttemptRef.current !== attempt) {
      if (process.env.NODE_ENV === "development") {
        console.log(
          `[Burbank Hire Cars] Ignoring stale onLoad from previous attempt (got attempt ${attempt}, active is ${activeAttemptRef.current})`
        )
      }
      return
    }

    loadedRef.current = true
    clearTimer()
    setPhase("loaded")

    if (process.env.NODE_ENV === "development") {
      const elapsed = performance.now() - mountTime.current
      console.log(
        `[Burbank Hire Cars] iframe onLoad fired at ${performance.now().toFixed(0)}ms (${elapsed.toFixed(0)}ms after mount, attempt ${attempt})`
      )
    }
  }, [attempt])

  const handleManualRetry = () => {
    loadedRef.current = false
    setPhase("loading")
    setAttempt((a) => a + 1)
  }

  const showSpinner = phase === "loading" || phase === "retrying"
  const showIframe = phase !== "failed"
  const showFailedMessage = phase === "failed"

  return (
    <div data-testid="booking-widget-container">
      <div
        className="relative min-h-[900px] sm:min-h-[1000px] lg:min-h-[1100px]"
        data-testid="booking-widget-embed"
      >
        {showSpinner && (
          <div
            className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-4 pointer-events-none"
            data-testid="booking-loading-overlay"
          >
            <Loader2 className="w-8 h-8 text-gold animate-spin" />
            <p className="text-white/50 text-sm tracking-wide">
              {phase === "retrying"
                ? "Retrying\u2026"
                : "Loading booking system\u2026"}
            </p>
          </div>
        )}

        {showFailedMessage && (
          <div
            className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-6 px-6"
            data-testid="booking-failed-overlay"
          >
            <div className="text-center max-w-md">
              <p className="text-white text-lg font-medium mb-2">
                Booking is taking longer than usual.
              </p>
              <p className="text-white/50 text-sm mb-6">
                If this persists, it may be a LimoAnywhere outage.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={handleManualRetry}
                  className="inline-flex items-center justify-center h-10 px-6 text-xs font-semibold tracking-[0.2em] uppercase rounded-sm bg-gold text-navy-dark hover:bg-gold-light transition-all gap-2"
                  data-testid="button-booking-retry"
                >
                  <RefreshCw className="w-4 h-4" />
                  Try Loading Again
                </button>
                <a
                  href={bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center h-10 px-6 text-xs font-semibold tracking-[0.2em] uppercase rounded-sm border-2 border-white/20 text-white hover:border-gold hover:text-gold transition-all gap-2"
                  data-testid="button-booking-newtab"
                >
                  <ExternalLink className="w-4 h-4" />
                  Open Booking in New Tab
                </a>
              </div>
            </div>
          </div>
        )}

        {showIframe && (
          <iframe
            key={attempt}
            src={iframeSrc}
            title="Burbank Hire Cars — Online Booking"
            loading="eager"
            allow="payment"
            className={`w-full border-0 transition-opacity duration-500 ${
              phase === "loaded" ? "opacity-100" : "opacity-0"
            }`}
            style={{ minHeight: "inherit" }}
            onLoad={handleIframeLoad}
            data-testid="iframe-booking"
          />
        )}
      </div>

      {phase === "loaded" && (
        <div
          className="text-center mt-8 pt-6 border-t border-white/[0.08]"
          data-testid="booking-fallback-section"
        >
          <p className="text-white/40 text-xs mb-3">
            Having trouble? You can also book directly:
          </p>
          <a
            href={bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center h-10 px-6 text-xs font-semibold tracking-[0.2em] uppercase rounded-sm border-2 border-white/20 text-white hover:border-gold hover:text-gold transition-all gap-2"
            data-testid="button-booking-fallback"
          >
            <ExternalLink className="w-4 h-4" />
            Open in New Tab
          </a>
        </div>
      )}
    </div>
  )
}
