import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import {useForm} from "react-hook-form"

const formSchema = z.object({
    username: z.string().min(2, {
        
    })
})
const PostForm = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema,),
        defaultValues: {
            username: "",
        }
    })>

    function onSubmit(values: z.infer<typeof formSchema>){
        console.log(values)
    }

  return (
    <div>PostForm</div>
  )
}

export default PostForm