import { useState } from 'react';
import { Mail, Check } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // 'idle' | 'error' | 'subscribed'

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = email.trim();
    if (!trimmed || !trimmed.includes('@')) {
      setStatus('error');
      return;
    }
    setStatus('subscribed');
    setEmail('');
  };

  return (
    <section aria-label="Newsletter Signup" className="bg-[#E9DFD5] py-10 sm:py-12 lg:py-16">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 lg:gap-12">
          {/* Left Icon + Editorial Copy */}
          <div className="flex items-start sm:items-center gap-4 sm:gap-6">
            <div className="shrink-0 text-[#857566] mt-0.5 sm:mt-0">
              <Mail className="w-9 h-9 sm:w-11 sm:h-11 lg:w-14 lg:h-14" strokeWidth={1.1} />
            </div>
            <div>
              <h2 className="font-serif font-normal text-[#1E1813] text-[24px] sm:text-[28px] lg:text-[36px] leading-tight">
                Join Alankrita
              </h2>
              <p className="mt-1.5 text-[13px] lg:text-[16px] text-[#52483F] leading-relaxed max-w-[420px] lg:max-w-[520px]">
                Subscribe for early access to new festive drops, custom pre-bookings, and seasonal edits for women &amp; kids.
              </p>
            </div>
          </div>

          {/* Right Form */}
          <div className="w-full lg:w-auto lg:min-w-[540px] xl:min-w-[600px]">
            {status === 'subscribed' ? (
              <div className="bg-[#FFFCF9] border border-[#D8CEC3] px-5 py-4 flex items-center gap-2.5 text-[13px] lg:text-[15px] text-[#1E1813]">
                <Check className="w-4 h-4 lg:w-5 lg:h-5 text-[#4C6B4A] shrink-0" />
                <span>Welcome to Alankrita. You&apos;re on our list for upcoming festive drops and custom pre-books.</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="flex flex-col sm:flex-row">
                <label htmlFor="newsletter-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="newsletter-email"
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (status === 'error') setStatus('idle');
                  }}
                  placeholder="Enter your email"
                  className="flex-1 bg-[#FFFCF9] px-4 lg:px-5 py-3.5 lg:py-4 text-[13px] lg:text-[15px] text-[#1E1813] placeholder:text-[#968A7E] border border-transparent focus:border-[#8F8072] focus:outline-none min-w-0"
                />
                <button
                  type="submit"
                  className="bg-[#1E1813] text-[#FFFCF9] text-[11px] lg:text-[13px] font-semibold tracking-[0.12em] uppercase px-7 lg:px-10 py-3.5 lg:py-4 hover:bg-[#352C24] transition-colors cursor-pointer whitespace-nowrap shrink-0"
                >
                  SUBSCRIBE
                </button>
              </form>
            )}
            {status === 'error' && (
              <p className="mt-1.5 text-[12px] lg:text-[13px] text-[#8B3E35]">
                Please enter a valid email address.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
