import * as React from "react"
import * as RechartsPrimitive from "recharts"

export type ChartConfig = Record<
  string,
  {
    label?: React.ReactNode
    color?: string
    icon?: React.ComponentType<{ className?: string }>
  }
>

const ChartContainer = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    config: ChartConfig
    children?: React.ReactNode
  }
>(({ ...props }, ref) => (
  <div ref={ref} {...props} />
))
ChartContainer.displayName = "ChartContainer"

const ChartStyle = ({ id, config }: { id: string; config: ChartConfig }) => {
  return null
}

const ChartLegend = RechartsPrimitive.Legend

const ChartTooltip = RechartsPrimitive.Tooltip

interface ChartContextProps {
  config: ChartConfig
}

const ChartContext = React.createContext<ChartContextProps | null>(null)

function useChart() {
  const context = React.useContext(ChartContext)
  if (!context) {
    throw new Error("useChart must be used within a <ChartProvider />")
  }
  return context
}

const ChartProvider = ({
  config,
  children,
}: {
  config: ChartConfig
  children: React.ReactNode
}) => (
  <ChartContext.Provider value={{ config }}>
    {children}
  </ChartContext.Provider>
)

export {
  ChartContainer,
  ChartStyle,
  ChartLegend,
  ChartTooltip,
  ChartProvider,
  useChart,
}
