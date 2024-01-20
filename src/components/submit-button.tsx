'use client'
 
import { useFormStatus } from 'react-dom'
import Button from './button'
 
export function SubmitButton() {
  const { pending } = useFormStatus()

  return (
    <Button type="submit" aria-disabled={pending} className="mt-11 md:mt-20 xl:mt-32" isDark>
      {pending ? 'ВІДПРАВЛЯЮ...' : 'ВІДПРАВИТИ'}
    </Button>
  )
}