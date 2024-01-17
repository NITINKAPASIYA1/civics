import { HiOutlineMail } from 'react-icons/hi'
import { TbPasswordFingerprint } from 'react-icons/tb'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useForm } from 'react-hook-form'
import { SignupValidation } from '@/lib/validation'

const SignIn = () => {
  const form = useForm<z.infer<typeof SignupValidation>>({
    resolver: zodResolver(SignupValidation),
    defaultValues: {
      email: '',
      password: '',
      confirmpassword: ''
    }
  })

  function onSubmit (values: z.infer<typeof SignupValidation>) {
    console.log(values)
  }

  return (
    <div className='h-[100%] w-[100%] flex font-lexend'>
      {/* //first half */}
      <div className='h-[100vh] w-[50%] bg-[#F8F9FA]'>
        <div className='flex  mt-3'>
          <img
            src='../../assets/logo.png'
            alt='logo'
            className='h-[45px] mt-2 ml-2'
          ></img>
          <h2 className='text-2xl mt-4 font-semi'>Civic</h2>
        </div>

        <div className='flex flex-col justify-center items-center mt-20'>
          <h1 className='font-bold text-[28px]'>Sign in</h1>

          <div className='relative'>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className='space-y-8'
              >
                <HiOutlineMail className='absolute  translate-y-[44px] ml-3' />
                <FormField
                  control={form.control}
                  name='email'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email Address</FormLabel>
                      <FormControl>
                        <Input
                          className='px-9'
                          placeholder='example.email@gmail.com'
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <TbPasswordFingerprint className='absolute translate-y-[44px] ml-3' />
                <FormField
                  control={form.control}
                  name='password'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input
                          type="password" 
                          className='px-9'
                          placeholder='Enter your password here'
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  type='submit'
                  className='bg-[#309535] w-[414px] h-[44px] hover:bg-[#308555]'
                >
                  Sign in
                </Button>
              </form>
            </Form>
          </div>

          <div className='flex space-x-40 mt-3'>
            <div>
              <input type='checkbox'></input>
              <label className='font-light ml-1'>Remember me</label>
            </div>

            <p className='text-[#309535] font-light text-[14px]'>
              Forgot password?
            </p>
          </div>

          <div className='mt-2 mb-2'></div>

          <div className='flex mt-3 space-x-1'>
            <p className='font-light'>Don't have an account?</p>
            <a href='/sign-up' className='text-[#309535] font-light'>
              Sign up
            </a>
          </div>

          <div className='flex space-x-2 mt-6'>
            <div className='h-[1px] w-[190px] bg-[#DEE1E6] mt-3.5' />
            <p className='font-normal text-[14px] mt-1 text-[#9095A1]'>OR</p>
            <div className='h-[1px] w-[190px] bg-[#DEE1E6] mt-3.5' />
          </div>

          <div className='flex space-x-2 mt-6'>
            <a href='/'>
              <svg
                width='44'
                height='44'
                viewBox='0 0 44 44'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <rect width='44' height='44' rx='22' fill='#C71610' />
                <path
                  d='M29.1916 20.6365L22.0326 20.6365V23.7045L26.0901 23.7045C25.4401 25.75 23.8401 26.432 22.0001 26.432C21.2872 26.4329 20.5846 26.2619 19.9519 25.9334C19.3192 25.6049 18.7751 25.1286 18.3658 24.545C17.9564 23.9614 17.6939 23.2876 17.6005 22.5809C17.507 21.8742 17.5854 21.1553 17.8291 20.4854C18.0727 19.8154 18.4743 19.2141 18.9999 18.7325C19.5255 18.2509 20.1595 17.9031 20.8481 17.7188C21.5367 17.5344 22.2597 17.5189 22.9556 17.6735C23.6515 17.8282 24.2998 18.1484 24.8456 18.607L27.0751 16.4835C26.1773 15.6565 25.0912 15.0612 23.9111 14.7492C22.731 14.4372 21.4927 14.4179 20.3034 14.693C19.1142 14.9681 18.0101 15.5293 17.087 16.3279C16.1639 17.1265 15.4496 18.1383 15.0062 19.2756C14.5628 20.4128 14.4037 21.6411 14.5427 22.8538C14.6816 24.0665 15.1144 25.2269 15.8036 26.2344C16.4927 27.2418 17.4173 28.0659 18.4972 28.635C19.577 29.2041 20.7794 29.501 22.0001 29.5C26.1356 29.5 29.8736 26.7725 29.1916 20.6365Z'
                  fill='white'
                />
              </svg>
            </a>

            <a href='/'>
              <svg
                width='44'
                height='44'
                viewBox='0 0 44 44'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <rect width='44' height='44' rx='22' fill='#455EA9' />
                <path
                  d='M30 22C29.9998 20.4712 29.5615 18.9745 28.737 17.6871C27.9126 16.3996 26.7365 15.3754 25.3481 14.7356C23.9596 14.0957 22.4169 13.8672 20.9026 14.0769C19.3882 14.2866 17.9657 14.9258 16.8034 15.9189C15.641 16.912 14.7876 18.2173 14.3441 19.6803C13.9005 21.1434 13.8855 22.7028 14.3007 24.1742C14.716 25.6455 15.5441 26.967 16.6871 27.9823C17.83 28.9976 19.24 29.6641 20.75 29.903V24.3125L18.719 24.3125L18.719 22H20.75V20.2375C20.75 18.2325 21.9445 17.125 23.7715 17.125C24.3715 17.1333 24.9701 17.1855 25.5625 17.281V19.25H24.5535C24.3816 19.2272 24.2067 19.2433 24.0418 19.2972C23.877 19.3512 23.7264 19.4415 23.6012 19.5616C23.476 19.6816 23.3794 19.8283 23.3186 19.9908C23.2578 20.1532 23.2344 20.3273 23.25 20.5V22L25.469 22L25.114 24.3125H23.25V29.903C25.1319 29.6053 26.8458 28.6457 28.0832 27.1969C29.3206 25.7481 30.0003 23.9053 30 22Z'
                  fill='white'
                />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* //second half */}
      <div className='h-[100vh] w-[50%] bg-[#d5d9e2] flex justify-center items-center flex-col'>
        <p className='font-light text-[32px] text-[#565D6D]'>
          Welcome to Civic!
        </p>
        <p className='text-[#6F7787] text-[18px] mb-10'>
          First thing first, let's set you up with an account 👋🏼
        </p>

        <img src='../assets/pic2.svg'></img>
      </div>
    </div>
  )
}

export default SignIn
