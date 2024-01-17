import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage,} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useForm } from "react-hook-form"
import { SignupValidation } from "@/lib/validation"
 


const Signup = () => {

  // 1. Define your form.
  const form = useForm<z.infer<typeof SignupValidation>>({
    resolver: zodResolver(SignupValidation),
    defaultValues: {
      email: '',
      password:'',
      confirmpassword:'',
    },
  })
 

  function onSubmit(values: z.infer<typeof SignupValidation>) {
    console.log(values)
  }


  return (
    <div className='h-[100%] w-[100%] flex font-lexend'>

    {/* section1 half */}
    <div className='h-[100vh] w-[50%] bg-[#F8F9FA]'>

        <div className='flex  mt-3'>
            <img  src='../../assets/logo.png' alt='logo' className="h-[45px] mt-2 ml-2"></img>
            <h2 className='text-2xl mt-4 font-semi'>Civic</h2>
        </div>

        <div className='flex flex-col  justify-center items-center gap-y-4 mt-16'>
            <h1 className='font-bold text-3xl'>Create an account</h1>
            <p className='font-light text-sm text-center'>By creating an account,you agree to this app's<br></br> 
            <span className="text-[#27782B]">Terms</span> and <span className="text-[#27782B]">Privacy Policy.</span></p>

            <div className="flex items-center justify-center font-light  rounded-full h-[44px] w-[416px] text-[#DE3B40] bg-[#FDF2F2] gap-x-1"><svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.6913 8.6365L10.5323 8.6365V11.7045L14.5898 11.7045C13.9398 13.75 12.3398 14.432 10.4998 14.432C9.78694 14.4329 9.08436 14.2619 8.45168 13.9334C7.819 13.6049 7.2749 13.1286 6.86554 12.545C6.45618 11.9614 6.19364 11.2876 6.10021 10.5809C6.00677 9.87417 6.08519 9.15533 6.32882 8.48538C6.57244 7.81542 6.97408 7.21412 7.49965 6.73249C8.02522 6.25086 8.65922 5.90312 9.34785 5.71876C10.0365 5.53441 10.7594 5.51889 11.4553 5.67352C12.1512 5.82815 12.7996 6.14837 13.3453 6.607L15.5748 4.4835C14.677 3.65655 13.5909 3.06122 12.4109 2.74919C11.2308 2.43717 9.99242 2.41788 8.8032 2.693C7.61399 2.96811 6.5099 3.52933 5.58677 4.32792C4.66365 5.12651 3.94938 6.13834 3.50598 7.27558C3.06259 8.41282 2.90346 9.64109 3.04241 10.8538C3.18136 12.0665 3.61419 13.2269 4.30334 14.2344C4.99248 15.2419 5.9171 16.0659 6.99694 16.635C8.07678 17.2041 9.2792 17.501 10.4998 17.5C14.6353 17.5 18.3733 14.7725 17.6913 8.6365Z" fill="#DE3B40"/>
            </svg>
            <a href="">Sign up with google</a></div>

            <div className="flex items-center justify-center font-light  rounded-full h-[44px] w-[416px] text-[#455EA9] bg-[#D9E4FF] gap-x-2"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 8C15.9998 6.47121 15.5615 4.9745 14.737 3.68706C13.9126 2.39963 12.7365 1.37537 11.3481 0.735559C9.95962 0.095746 8.4169 -0.132832 6.90257 0.076886C5.38823 0.286604 3.9657 0.925835 2.80337 1.9189C1.64104 2.91197 0.787596 4.21729 0.344069 5.68032C-0.099457 7.14336 -0.114491 8.70285 0.300748 10.1742C0.715987 11.6455 1.54411 12.967 2.68708 13.9823C3.83004 14.9976 5.23999 15.6641 6.75 15.903L6.75 10.3125L4.719 10.3125L4.719 8L6.75 8L6.75 6.2375C6.75 4.2325 7.9445 3.125 9.7715 3.125C10.3715 3.13332 10.9701 3.18546 11.5625 3.281V5.25H10.5535C10.3816 5.22716 10.2067 5.24331 10.0418 5.29725C9.87698 5.35118 9.72638 5.44152 9.60119 5.56158C9.476 5.68163 9.37943 5.82831 9.31864 5.99076C9.25784 6.15321 9.23439 6.32725 9.25 6.5V8L11.469 8L11.114 10.3125H9.25L9.25 15.903C11.1319 15.6053 12.8458 14.6457 14.0832 13.1969C15.3206 11.7481 16.0003 9.90529 16 8Z" fill="#455EA9"/>
            </svg>
            <a href="">Sign up with facebook</a></div>
 
            <div className="flex space-x-2">
            <div className="h-[1px] w-[84px] bg-[#DEE1E6] mt-3.5"/>
            <p className="font-normal text-[14px] mt-1 text-[#9095A1]">OR SIGN UP USING YOUR EMAIL</p>
            <div className="h-[1px] w-[84px] bg-[#DEE1E6] mt-3.5"/>
            </div>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email Address</FormLabel>
                      <FormControl>
                        <Input placeholder="example.email@gmail.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="flex flex-row gap-x-7">
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input type="password" placeholder="Enter password here" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="confirmpassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Confirm Password</FormLabel>
                      <FormControl>
                        <Input type="password"  placeholder="Enter confirm password" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                

                </div>

                <Button  type="submit" className="bg-[#309535] w-[414px] h-[44px] hover:bg-[#308555]">Sign up</Button>
              </form>
          </Form>
          
            
            

            <div className="flex  mt-[50px]">
              <p className="text-[#6F7787] flex ">Have an account?</p>
              <a href="/login-in" className="text-[#27782B]">Log in</a>

            </div>
        </div>

       

    </div>

    {/* section 2 half */}
    <div className='h-[100vh] w-[50%] bg-[#d5d9e2] flex justify-center items-center flex-col'>

      <p className="font-light text-[32px] text-[#565D6D]">Welcome to Civic!</p>
      <p className="text-[#6F7787] text-[18px] mb-10">First thing first, let's set you up with an account 👋🏼</p>

      <img src="../assets/pic1.svg"></img>


    </div>

    </div>
  )
}

export default Signup