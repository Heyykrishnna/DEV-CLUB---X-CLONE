import React from 'react';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';

export default function AuthPage() {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen bg-black text-white">
      <footer className="fixed bottom-0 w-full p-4 flex flex-wrap justify-center gap-4 text-[10px] text-gray-500 bg-black z-10">
        <a href="#">About</a>
        <a href="#">Download the X app</a>
        <a href="#">Help Center</a>
        <a href="#">Terms of Service</a>
        <a href="#">Privacy Policy</a>
        <a href="#">Cookie Policy</a>
        <a href="#">Accessibility</a>
        <a href="#">Ads info</a>
        <a href="#">Blog</a>
        <a href="#">Status</a>
        <a href="#">Careers</a>
        <a href="#">Brand Resources</a>
        <a href="#">Advertising</a>
        <a href="#">Marketing</a>
        <a href="#">X for Business</a>
        <a href="#">Developers</a>
        <a href="#">Directory</a>
        <a href="#">Settings</a>
        <span>© 2026 X Corp.</span>
      </footer>

      <div className="grid grid-cols-1 lg:grid-cols-2 w-full max-w-[100vw]">
        <div className="flex items-center justify-center p-8 lg:bg-black">
          <svg viewBox="0 0 24 24" aria-hidden="true" className="h-16 w-16 lg:h-[300px] lg:w-[300px] fill-white">
            <g>
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
            </g>
          </svg>
        </div>

        <div className="flex flex-col justify-center p-8 lg:p-16 text-left">
          <h1 className="text-[44px] lg:text-[64px] font-bold mb-12">
            Happening now
          </h1>
          
          <h2 className="text-[23px] lg:text-[31px] font-bold mb-8">
            Join today.
          </h2>

          <div className="flex flex-col gap-4 w-full max-w-[300px]">
            <Button variant="white" fullWidth onClick={() => navigate('/home')}>
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
              Sign up with Google
            </Button>
            
            <Button variant="white" fullWidth onClick={() => navigate('/home')}>
              <svg className="w-5 h-5 mr-2 mb-1" viewBox="0 0 384 512" fill="currentColor"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 52.3-11.4 69.5-34.3z"/></svg>
              Sign up with Apple
            </Button>

            <div className="flex items-center my-2">
              <div className="h-px bg-[var(--color-border)] flex-1"></div>
              <span className="mx-2 text-[15px] text-[var(--color-white)]">or</span>
              <div className="h-px bg-[var(--color-border)] flex-1"></div>
            </div>

            <Button variant="primary" fullWidth onClick={() => navigate('/home')}>
              Create account
            </Button>
            
            <p className="text-[11px] text-gray-500 mt-1 mb-8 leading-4">
              By signing up, you agree to the <a href="/terms" className="text-blue-400 hover:underline">Terms of Service</a> and <a href="/privacy" className="text-blue-400 hover:underline">Privacy Policy</a>, including <a href="/cookies" className="text-blue-400 hover:underline">Cookie Use</a>.
            </p>
            
            <h3 className="text-[17px] font-bold mb-3">
              Already have an account?
            </h3>
            
            <Button variant="outline-white" fullWidth onClick={() => navigate('/home')}>
              Sign in
            </Button>
            <Button variant="outline-white" fullWidth onClick={() => navigate('/home')}>
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0,0,256,256">
                <g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none"><g transform="scale(5.33333,5.33333)"><path d="M18.542,30.532l15.956,-11.776c0.783,-0.576 1.902,-0.354 2.274,0.545c1.962,4.728 1.084,10.411 -2.819,14.315c-3.903,3.901 -9.333,4.756 -14.299,2.808l-5.423,2.511c7.778,5.315 17.224,4 23.125,-1.903c4.682,-4.679 6.131,-11.058 4.775,-16.812l0.011,0.011c-1.966,-8.452 0.482,-11.829 5.501,-18.735c0.116,-0.164 0.237,-0.33 0.357,-0.496l-6.602,6.599v-0.022l-22.86,22.958M15.248,33.392c-5.582,-5.329 -4.619,-13.579 0.142,-18.339c3.521,-3.522 9.294,-4.958 14.331,-2.847l5.412,-2.497c-0.974,-0.704 -2.224,-1.46 -3.659,-1.994c-6.478,-2.666 -14.238,-1.34 -19.505,3.922c-5.065,5.064 -6.659,12.851 -3.924,19.496c2.044,4.965 -1.307,8.48 -4.682,12.023c-1.199,1.255 -2.396,2.514 -3.363,3.844l15.241,-13.608"></path></g></g>
                </svg>
              Grok
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
