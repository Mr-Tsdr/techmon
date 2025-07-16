import React from 'react'
import Image from 'next/image'
import { cn } from '../lib/utils'

export const Logo = ({ className }: { className?: string }) => {
    return (
        <Image
            src='/images/logo.png'
            alt="logo"
            className={cn(className)}
            width={132}
            height={32}
        />
    )
}

