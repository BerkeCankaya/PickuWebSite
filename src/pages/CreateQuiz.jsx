import { useState, useEffect } from 'react';
import { FaInfoCircle } from "react-icons/fa";
import QuizDetails from '../components/QuizDetails';


export default function CreateQuiz({data}) {
       const [isLoggedIn, setIsLoggedIn] = useState(false);

       useEffect(() => {
           const user = localStorage.getItem('user');
           if (user) {
               setIsLoggedIn(true);
           }
       }, []);

       const [activePage,setActivePage] = useState("quizDetail");
  return (
    <div className='w-2/3 min-h-screen m-auto max-2xl:w-[80%] max-lg:w-[90%] max-sm:w-full '>
        <div className='w-[90%] m-auto h-[25%] pt-10 gap-4 flex flex-col max-sm:w-[90%] max-sm:m-auto'>
            <div className='w-full h-1/2 flex items-end'>
                <h1 className='text-color font-bold text-2xl max-sm:text-xl'>Quiz Oluştur </h1>
            </div>
            <div className='w-full h-1/2 flex items-center'>
                <div className='w-full h-1/2 bg-red-500 rounded-xl flex items-center p-4 gap-3 max-sm:h-[60%]'>
                    <FaInfoCircle className='text-color text-3xl' />
                    <h1 className='text-color font-semibold text-xl max-sm:text-sm'>Quiz Oluşturmak için önce Giriş Yapmalısınız!</h1>
                </div>
            </div>
            
        </div>
        <div className={`w-full h-[75%] flex flex-col gap-5 pt-10 transition-opacity duration-300  ${!isLoggedIn ? 'opacity-40  pointer-events-none' : 'opacity-100 max-sm:block'} `}>
            <div className='w-full h-[20%] max-sm:h-[30%] flex items-center justify-center'>
                <div className='w-[80%] max-sm:w-full h-full m-auto flex '>
                    <div className="w-1/2 flex justify-center items-center">
                        <h1 className={`text-color flex items-center gap-2 text-xl font-semibold border-b-2 p-4 cursor-pointer max-sm:text-lg text-xsm max-sm:text-[10px] ${activePage === "quizDetail" ? 'border-white' : 'border-transparent'}`}  onClick={() => setActivePage('quizDetail')}><span className=' w-[50px] h-[50px] rounded-full flex items-center justify-center bg-button-bgColor border-4 border-bg-hover max-sm:w-[30px] max-sm:h-[30px] max-sm:text-sm '>1</span>Quiz Detayları</h1>
                    </div>
                    <div className="w-1/2 flex justify-left items-center">
                       <h1 className={`text-color flex items-center gap-2 text-xl font-semibold border-b-2  p-4 cursor-pointer max-sm:text-lg max-xs:text-sm max-sm:text-[10px] ${activePage === "MyQuizzes" ? 'border-white' : 'border-transparent'}`}  onClick={() => setActivePage('MyQuizzes')}><span className=' w-[50px] h-[50px] rounded-full flex items-center justify-center bg-button-bgColor border-4 border-bg-hover max-sm:w-[30px] max-sm:h-[30px] max-sm:text-sm'>2</span>Quizlerim</h1>
                    </div>
                </div>
            </div>
        <div className='w-full h-[80%] p-4'>
          {activePage === 'quizDetail' && (
            <div className='w-full h-full'>
             {data ? <QuizDetails  categories={data.categories}  /> : <p>Yükleniyor...</p>}

            </div>
          )}

          {activePage === 'MyQuizzes' && (
            <div className="my-quizzes">
              <h2>Quizlerim İçeriği</h2>
            </div>
          )}
        </div>
        </div>   
    </div>
  )
}
