import * as React from "react"
import useEmblaCarousel, {
  type UseEmblaCarouselType,
} from "embla-carousel-react"
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons"

import { cn } from "@/libs/utils"
import { Button } from "@/component/ui/button"

type CarouselApi = UseEmblaCarouselType[1]
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>
type CarouselOptions = UseCarouselParameters[0]
type CarouselPlugin = UseCarouselParameters[1]

interface CarouselContextProps {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0]
  api: ReturnType<typeof useEmblaCarousel>[1]
  opts?: CarouselOptions
  orientation?: "horizontal" | "vertical"
  scrollSnaps?: number[]
  scrollProgress?: number
}

const CarouselContext = React.createContext<CarouselContextProps | null>(null)

function useCarousel() {
  const context = React.useContext(CarouselContext)
  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />")
  }
  return context
}

const Carousel = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    opts?: CarouselOptions
    plugins?: CarouselPlugin
    orientation?: "horizontal" | "vertical"
  }
>(
  (
    {
      orientation = "horizontal",
      opts,
      plugins,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const [carouselRef, api] = useEmblaCarousel(
      {
        ...opts,
        axis: orientation === "horizontal" ? "x" : "y",
      },
      plugins
    )
    const [scrollSnaps, setScrollSnaps] = React.useState<number[]>([])
    const [scrollProgress, setScrollProgress] = React.useState(0)

    const handleSelect = React.useCallback((api: CarouselApi) => {
      if (!api) return
      setScrollSnaps(api.scrollSnapList())
    }, [])

    const handleScroll = React.useCallback((api: CarouselApi) => {
      if (!api) return
      const progress = Math.max(0, Math.min(1, api.scrollProgress()))
      setScrollProgress(progress)
    }, [])

    React.useEffect(() => {
      if (!api) return
      handleSelect(api)
      handleScroll(api)
      api.on("select", handleSelect)
      api.on("scroll", handleScroll)
      api.on("reInit", handleSelect)
      api.on("reInit", handleScroll)
      return () => {
        api.off("select", handleSelect)
        api.off("scroll", handleScroll)
        api.off("reInit", handleSelect)
        api.off("reInit", handleScroll)
      }
    }, [api, handleSelect, handleScroll])

    return (
      <CarouselContext.Provider
        value={{
          carouselRef,
          api: api,
          opts,
          orientation,
          scrollSnaps,
          scrollProgress,
        }}
      >
        <div ref={ref} className={cn("w-full", className)} {...props}>
          {children}
        </div>
      </CarouselContext.Provider>
    )
  }
)
Carousel.displayName = "Carousel"

const CarouselContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { carouselRef, orientation } = useCarousel()

  return (
    <div ref={carouselRef} className="overflow-hidden">
      <div
        ref={ref}
        className={cn(
          "flex",
          orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
          className
        )}
        {...props}
      />
    </div>
  )
})
CarouselContent.displayName = "CarouselContent"

const CarouselItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { orientation } = useCarousel()

  return (
    <div
      ref={ref}
      className={cn(
        "min-w-0 shrink-0 grow-0 basis-full",
        orientation === "horizontal" ? "pl-4" : "pt-4",
        className
      )}
      {...props}
    />
  )
})
CarouselItem.displayName = "CarouselItem"

const CarouselPrevious = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof Button>
>(({ className, variant = "outline", size = "icon", ...props }, ref) => {
  const { scrollSnaps, api } = useCarousel()

  const canScrollPrev = scrollSnaps.length > 0

  return (
    <Button
      ref={ref}
      variant={variant}
      size={size}
      className={cn("absolute left-12 top-1/2 z-40 -translate-y-1/2", className)}
      disabled={!canScrollPrev}
      onClick={() => api?.scrollPrev()}
      {...props}
    >
      <ChevronLeftIcon className="h-4 w-4" />
      <span className="sr-only">Previous slide</span>
    </Button>
  )
})
CarouselPrevious.displayName = "CarouselPrevious"

const CarouselNext = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof Button>
>(({ className, variant = "outline", size = "icon", ...props }, ref) => {
  const { scrollSnaps, api } = useCarousel()

  const canScrollNext = scrollSnaps.length > 0

  return (
    <Button
      ref={ref}
      variant={variant}
      size={size}
      className={cn("absolute right-12 top-1/2 z-40 -translate-y-1/2", className)}
      disabled={!canScrollNext}
      onClick={() => api?.scrollNext()}
      {...props}
    >
      <ChevronRightIcon className="h-4 w-4" />
      <span className="sr-only">Next slide</span>
    </Button>
  )
})
CarouselNext.displayName = "CarouselNext"

export {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
}
