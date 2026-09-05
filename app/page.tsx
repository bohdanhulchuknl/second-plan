import React from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const Page = () => {
  return (
    <div>
      <h1>TITLE</h1>
      <Button variant={'default'}>Click me</Button>
      <Link href={"sign-in"}>Sign In</Link>
    </div>
  )
}

export default Page