import { AspectRatio } from "@/components/ui/aspect-ratio"

export default function Logo() {
    return (
        <AspectRatio ratio={1/1}>
            <img src="/logo.svg" alt="Logo" className=" w-full h-full" />
        </AspectRatio>
    )
}
