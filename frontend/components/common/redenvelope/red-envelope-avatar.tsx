"use client"

import * as React from "react"
import { useInView } from "motion/react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface RedEnvelopeAvatarProps {
  src?: string
  username?: string
  className?: string
  fallbackClassName?: string
}

export function RedEnvelopeAvatar({ src, username, className, fallbackClassName }: RedEnvelopeAvatarProps) {
  const avatarRef = React.useRef<HTMLSpanElement>(null)
  const isInView = useInView(avatarRef, { once: true })

  return (
    <Avatar ref={avatarRef} className={className}>
      {/* Radix 会预加载图片，进入可视区域后才挂载，避免缓冲行提前请求头像。 */}
      {isInView && (
        <AvatarImage className="rounded-md" src={src} alt={username} loading="lazy" decoding="async" />
      )}
      <AvatarFallback className={fallbackClassName}>
        {username?.charAt(0).toUpperCase()}
      </AvatarFallback>
    </Avatar>
  )
}
