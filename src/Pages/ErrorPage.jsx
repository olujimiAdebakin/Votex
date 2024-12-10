import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Image from "../assets/voting-app-assets-main/404.gif"

const ErrorPage = () => {

    const navigate = useNavigate()

  // redirect user after 5 seconds
  
  useEffect(() => {
    setTimeout(() => {
      navigate(-1)
    }, 5000)
  })
  return (
    <>
      <section className='errorPage'>
        <div className='errorPage__container'>
          <img src={Image} alt="Page not found" />
          <h1>404</h1>
          <p>This page does not exist. You will be redirected to the previous page shortly</p>
        </div>
      </section>
    </>
  )
}

export default ErrorPage