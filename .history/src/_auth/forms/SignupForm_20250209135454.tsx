import * as z from 'zod'

import {Button} from '@/components/ui/button'


const SignupForm = () => {
  const formSchema = z.object({
    username: z.string().min(2).max(20),
  })
  return (
    <div>
      <Button>Click me</Button>
    </div>
  )
}

export default SignupForm