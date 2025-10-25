import type { Component } from 'vue'

export interface DecorativeCircleProps {
  size?: 'sm' | 'md' | 'lg' | 'xl'
  color?: string
  className?: string
}

export interface FeatureCardProps {
  icon: Component
  title: string
  description: string
}
