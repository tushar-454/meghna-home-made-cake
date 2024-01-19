'use client';
import ButtonFill from '@/components/ui/ButtonFill';
import Input from '@/components/ui/Input';
import Title from '@/components/ui/Title';
import postApiData from '@/lib/postApiData';
import { useState } from 'react';
import toast from 'react-hot-toast';

const cakeInit = {
  name: '',
  description: '',
  cakePic: '',
  price: '',
  salePrice: '',
  flavour: '',
  category: '',
};
const errorInit = {
  name: '',
  description: '',
  cakePic: '',
  price: '',
  salePrice: '',
  flavour: '',
  category: '',
};

const AllCakes = () => {
  const [cake, setCake] = useState({ ...cakeInit });
  const [error, setError] = useState({ ...errorInit });
  // handle Input change
  const handleInput = (e) => {
    const { value, name } = e.target;
    setCake((prevCake) => ({ ...prevCake, [name]: value }));
    setError((prevError) => ({ ...prevError, [name]: '' }));
  };
  // handle add a cake form submit
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      for (const key in cake) {
        if (!cake[key]) return toast.error('সকল ফিল্ড গুলো পূরন করুন');
      }
      const { message } = await postApiData('admin/addacakes', 'POST', cake);
      if (message === 'success')
        return toast.success('কেকটি ডাটাবেজ এ সংরক্ষন করা হয়েছে');
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <Title>নতুন কেক যুক্ত করুন</Title>
      {/* add cakes form  */}
      <div className='mr-4'>
        <form onSubmit={handleFormSubmit}>
          <Input
            displayName='কেকের নাম'
            id={'name'}
            name={'name'}
            type='text'
            placeholder='ভ্যানিলা চকলেট কেক'
            value={cake.name}
            onChange={handleInput}
            error={error.name}
          />
          <Input
            displayName='কেকের বিবরণ'
            id={'description'}
            name={'description'}
            type='text'
            placeholder='বিস্তারিত তথ্য...'
            value={cake.description}
            onChange={handleInput}
            error={error.description}
          />
          <Input
            displayName='কেকের ছবি'
            id={'cakePic'}
            name={'cakePic'}
            type='text'
            placeholder='কেকের ছবির লিঙ্ক বসান'
            value={cake.cakePic}
            onChange={handleInput}
            error={error.cakePic}
          />
          <div className='flex gap-4'>
            <Input
              displayName='দাম'
              id={'price'}
              name={'price'}
              type='number'
              placeholder='699'
              value={cake.price}
              onChange={handleInput}
              error={error.price}
            />
            <Input
              displayName='বিক্রির দাম'
              id={'salePrice'}
              name={'salePrice'}
              type='number'
              placeholder='999'
              value={cake.salePrice}
              onChange={handleInput}
              error={error.salePrice}
            />
          </div>
          <div className='flex gap-4'>
            <Input
              displayName='ফ্লেভার'
              id={'flavour'}
              name={'flavour'}
              type='text'
              placeholder='চকলেট'
              value={cake.flavour}
              onChange={handleInput}
              error={error.flavour}
            />
            <Input
              displayName='ক্যাটেগরি'
              id={'category'}
              name={'category'}
              type='text'
              placeholder='কেকের ক্যাটেগরি উল্লেখ করুন'
              value={cake.category}
              onChange={handleInput}
              error={error.category}
            />
          </div>
          <ButtonFill displayName={'কেকটি যোগ করুন'} />
        </form>
      </div>
    </div>
  );
};

export default AllCakes;
