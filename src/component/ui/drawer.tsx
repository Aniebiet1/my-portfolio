import * as React from "react"
import * as DrawerPrimitive from "@radix-ui/react-dialog"
import { Cross2Icon } from "@radix-ui/react-icons"
import { Drawer as DrawerPrimitive2 } from "vaul"

import { cn } from "@/libs/utils"

const Drawer = DrawerPrimitive2.Root

const DrawerTrigger = DrawerPrimitive2.Trigger

const DrawerPortal = DrawerPrimitive2.Portal

const DrawerClose = DrawerPrimitive2.Close

const DrawerOverlay = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive2.Overlay>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive2.Overlay>
>(({ className, ...props }, ref) => (
  <DrawerPrimitive2.Overlay
    ref={ref}
    className={cn("fixed inset-0 z-40 bg-black/80", className)}
    {...props}
  />
))
DrawerOverlay.displayName = DrawerPrimitive2.Overlay.displayName

const DrawerContent = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive2.Content>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive2.Content>
>(({ className, children, ...props }, ref) => (
  <DrawerPortal>
    <DrawerOverlay />
    <DrawerPrimitive2.Content
      ref={ref}
      className={cn(
        "fixed inset-x-0 bottom-0 z-40 mt-24 flex h-auto flex-col rounded-t-[10px] border bg-background",
        className
      )}
      {...props}
    >
      <div className="mx-auto mt-4 h-2 w-[100px] rounded-full bg-muted" />
      {children}
    </DrawerPrimitive2.Content>
  </DrawerPortal>
))
DrawerContent.displayName = "DrawerContent"

const DrawerHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn("grid gap-1.5 p-4 text-center sm:text-left", className)}
    {...props}
  />
)
DrawerHeader.displayName = "DrawerHeader"

const DrawerFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn("mt-auto flex flex-col gap-2 p-4", className)}
    {...props}
  />
)
DrawerFooter.displayName = "DrawerFooter"

const DrawerTitle = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive2.Title>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive2.Title>
>(({ className, ...props }, ref) => (
  <DrawerPrimitive2.Title
    ref={ref}
    className={cn(
      "text-lg font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
))
DrawerTitle.displayName = DrawerPrimitive2.Title.displayName

const DrawerDescription = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive2.Description>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive2.Description>
>(({ className, ...props }, ref) => (
  <DrawerPrimitive2.Description
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
DrawerDescription.displayName = DrawerPrimitive2.Description.displayName

export {
  Drawer,
  DrawerPortal,
  DrawerOverlay,
  DrawerTrigger,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
}
