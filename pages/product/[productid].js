import { useRouter } from 'next/router'

export default function ProductDetail(){

    const router = useRouter()
    console.log(router)

    return (
        <div>
            ProductDetail
            { router.query.productid }
        </div>
    )
}