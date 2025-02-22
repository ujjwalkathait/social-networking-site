import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import {useForm} from "react-hook-form"
const PostForm = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema,),
        defaultValues: {
            username: "",
        }
    })>

    function onSubmit(values: z.infer<typeof form)

  return (
    <div>PostForm</div>
  )
}

export default PostForm