import { createContext } from 'react'

export const BatteryContext = createContext() // 只有当组件所处的树中没有匹配到 Provider 时，其 defaultValue = 90 参数才会生效。
export const OnlineContext = createContext()