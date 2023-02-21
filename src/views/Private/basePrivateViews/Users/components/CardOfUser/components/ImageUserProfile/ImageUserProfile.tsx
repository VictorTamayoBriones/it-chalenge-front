import { Image } from "@chakra-ui/react"

interface Props{
  userMail: string
}

function ImageUserProfile({userMail}:Props) {
  return (
    <Image pointerEvents="none"  src={`https://avatars.dicebear.com/api/avataaars/admin.svg`} alt='user image profile' />
  )
}
export default ImageUserProfile