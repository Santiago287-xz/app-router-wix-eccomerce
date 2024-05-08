import { Link } from 'next-view-transitions'

export default function App() {
    return (
        <div className='m-auto w-[40rem] h-screen justify-center flex flex-col'>
            <Link href='/test/details' className='text-2xl'>Go to /test/details</Link>
            <Link href='/' className='text-2xl'>Go to /</Link>
            <img
                src="https://res.cloudinary.com/djzsjzasg/image/upload/c_scale,w_300/v1678947391/malcolm-kee/meow_dtsn8h.png"
                alt="cat"
                className="cat-img thumbnail"
            />
            <p className='mt-4 [view-transition-name:text]'>Lorem ipsum dolor, sit amet conse eius quam exercitationem iste commodi delectus qui amet nisi quim exercitationem is dem aperiam officia quibusdam maiores nulla aspernatur obcaecati quo. Est, expedita.</p>
        </div>
    );
};
