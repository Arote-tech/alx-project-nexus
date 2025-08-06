import { ReactNode } from "react";
import { type Movie } from "@/types"

export interface ComponentProps {
  children: ReactNode
}

export interface ButtonProps {
  title: string
  action?: () => void
}



export interface MovieCardProps {
  Movie: Movie 
}
