import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export const BASE_PATH = "/tour-website"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getAssetPath(path: string) {
  if (!path) return ""
  if (path.startsWith("http") || path.startsWith("https") || path.startsWith("data:")) {
    return path
  }
  const cleanPath = path.startsWith("/") ? path : `/${path}`
  return `${BASE_PATH}${cleanPath}`
}
