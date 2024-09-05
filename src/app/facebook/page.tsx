'use client' // chỉ render 1 phần phía client (các event, thư viện,...)
import { useRouter } from 'next/navigation'
import { Button } from 'react-bootstrap';


const Facebook = () => {
    const router = useRouter()

    const handle = () => {
        router.push('/')
    }

    return(
        <>
            <div>

                Facebook
            </div>

            <Button variant='primary'> back home</Button>

            <button onClick={handle}>back</button>
        </>
    )
}

export default Facebook;