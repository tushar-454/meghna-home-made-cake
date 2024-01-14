'use client';
import ButtonFill from '@/components/ui/ButtonFill';
import Input from '@/components/ui/Input';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import toast from 'react-hot-toast';

const AdminLoginForm = () => {
  const [login, setLogin] = useState({ email: '', password: '' });
  const [error, setError] = useState({ email: '', password: '' });
  const router = useRouter();

  // input handler
  const handleInput = (e) => {
    const { name, value } = e.target;
    setLogin((prev) => ({ ...prev, [name]: value }));
    setError((prev) => ({ ...prev, [name]: '' }));
  };

  // handle admin login
  const handleLogin = async (e) => {
    e.preventDefault();
    const { email, password } = login;
    if (!email) {
      setError((prev) => ({ ...prev, email: 'Email is required! ' }));
    }
    if (!password) {
      setError((prev) => ({ ...prev, password: 'Password is required! ' }));
    }
    const res = await fetch('http://localhost:5000/api/v1/admin/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });
    const { message } = await res.json();
    if (message === 'success') {
      router.push('/admin');
      toast.success('Login success');
    } else {
      toast.error('Something is wrong');
    }
  };

  return (
    <>
      {/* <!-- Form --> */}
      <form onSubmit={handleLogin}>
        <div className='grid gap-y-4'>
          <Input
            displayName='ইমেইল'
            type='email'
            id={'email'}
            name='email'
            placeholder={'example@gmail.com'}
            value={login.email}
            onChange={handleInput}
            error={error.email}
          />
          <Input
            displayName='পাসওয়ার্ড'
            type='password'
            id={'password'}
            name='password'
            placeholder={'s909j*(^&'}
            value={login.password}
            onChange={handleInput}
            error={error.password}
          />
          <ButtonFill displayName={'লগইন করুন'} />
        </div>
      </form>
      {/* <!-- End Form --> */}
    </>
  );
};

export default AdminLoginForm;
