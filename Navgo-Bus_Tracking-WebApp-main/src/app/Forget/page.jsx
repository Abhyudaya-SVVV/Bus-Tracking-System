'use client';
import React, { useState, useRef  } from "react";

const ForgetPasswd = () => {
    const [showPopup, setShowPopup] = useState(false);
  const [otp, setOtp] = useState(['', '', '', '']);
  const [verificationMessage, setVerificationMessage] = useState('');
  const [isVerified, setIsVerified] = useState(false);
  const [email, setEmail] = useState('');
  const otpInputs = useRef([]);

  const handleSignUp = (e) => {
    e.preventDefault();
    setShowPopup(true);
  };

  const handleOtpChange = (index, value) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move to next input if value is entered
    if (value !== '' && index < 3) {
      otpInputs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (index, e) => {
    // Move to previous input if backspace is pressed and current input is empty
    if (e.key === 'Backspace' && index > 0 && otp[index] === '') {
      otpInputs.current[index - 1].focus();
    }
  };

  const handleVerify = () => {
    const enteredOtp = otp.join('');
    if (enteredOtp === '1234') {
        setVerificationMessage('Verified successfully!');
        setIsVerified(true);
        setTimeout(() => {
            setShowPopup(false);
        }, 1000);
    } else {
        setVerificationMessage('Invalid OTP. Please try again.');
    }
};
  return (
    <>
      <div className="w-[100%] py-[5rem] flex items-center  justify-center">
        <form>
          <div className="relative py-3 sm:max-w-xl sm:mx-auto ">
            <div className="relative px-4 py-10 bg-white mx-8 shadow-2xl md:mx-0 shadow rounded-3xl sm:p-10">
              <h1 className="text-[30px] mb-[35px] font-bold">
                Forget Your Password
              </h1>
              <div className="max-w-md mx-auto">
                <div className="mt-5 grid grid-cols-1 sm:grid-cols-1 gap-5">
                  <div>
                    <label
                      className="font-semibold text-sm text-gray-600 pb-1 block"
                      for="email"
                      
                    >
                      Email or username
                    </label>
                    <input
                      placeholder="Enter your email or username"
                      className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                      type="text"
                      id="text"
                      value={email}
  onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
                {isVerified && (
                <div className="mt-5 grid grid-cols-1 sm:grid-cols-1 gap-5">
                  <div>
                    <label
                      className="font-semibold text-sm text-gray-600 pb-1 block"
                      for="email"
                    >
                      Set New Password
                    </label>
                    <input
                      placeholder="Create new password"
                      className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                      type="password"
                      id="password"
                    />
                  </div>
                  <div>
                    <label
                      className="font-semibold text-sm text-gray-600 pb-1 block"
                      for="email"
                    >
                      Re-enter your password
                    </label>
                    <input
                      placeholder="Re-enter your new password"
                      className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                      type="password"
                      id="password"
                    />
                  </div>
                </div>
                )}
                <div className="mt-5">
                  <button
                    className="py-2 px-4 bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
                    type="submit"
                    onClick={handleSignUp}
                  >
                    {isVerified ? "Reset my password" : "Send OTP"}
                  </button>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
                  <a
                    className="text-center text-xs text-gray-500 m-[2px] uppercase dark:text-gray-400 hover:underline"
                    href="/Login"
                  >
                    Back to Login Page
                  </a>
                  <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
      {showPopup && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center">
          <div className="relative p-5 border w-96 shadow-lg rounded-md bg-white">
            <div className="mt-3 text-center">
              <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                <svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <h3 className="text-lg leading-6 font-medium text-gray-900 mt-4">Please check your email</h3>
              <div className="mt-2 px-7 py-3">
                <p className="text-sm text-gray-500">We've sent a code to {email}</p>
              </div>
              <div className="mt-4 flex justify-center space-x-3">
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    ref={(el) => (otpInputs.current[index] = el)}
                    className="w-12 h-12 text-center text-2xl border rounded-md"
                    type="text"
                    maxLength="1"
                    value={digit}
                    onChange={(e) => handleOtpChange(index, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                  />
                ))}
              </div>
              <div className="mt-2">
                <p className="text-sm text-blue-600 cursor-pointer">Didn't get the code? Click to resend.</p>
              </div>
              {verificationMessage && (
                <p className={`mt-2 text-sm ${verificationMessage.includes('successfully') ? 'text-green-600' : 'text-red-600'}`}>
                  {verificationMessage}
                </p>
              )}
              <div className="items-center px-4 py-3">
                <button
                  id="ok-btn"
                  className="px-4 py-2 bg-blue-600 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-green-300"
                  onClick={handleVerify}
                >
                  Verify
                </button>
              </div>
              <div className="mt-2">
                <button
                  className="text-sm text-gray-500 hover:text-gray-700"
                  onClick={() => setShowPopup(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ForgetPasswd;
