import { Link } from "react-router-dom";

export default function Login() {

    

  return (
    <div className="w-full h-full flex items-center justify-center">
        <div className="w-[520px] h-[550px] max-sm:w-[90%]">
        <form className="form w-full h-full flex items-center justify-center flex-col gap-8 shadow-primary-shadow rounded-lg" action="">
            <h1 className="text-white text-2xl text-center pb-5">PickU'ya Hoşgeldiniz</h1>
            <div className="flex flex-col gap-5  justify-center">
                <div className="flex items-center justify-between"> 
                    <input className="w-full outline-none bg-transparent shadow-primary-shadow relative rounded-xl px-2 py-2 text-white text-sm" placeholder="Email" type="text" />
                </div>
                <div className="flex justify-between items-center relative">
                <input className="w-full outline-none bg-transparent shadow-primary-shadow relative rounded-xl px-2 py-2 text-white text-sm" placeholder="Şifre" type="password" />
                </div>
                <div className="flex gap-10">
                <label className="text-white gap-1 text-xs flex items-center"><input className="cursor-pointer " type="checkbox" />Beni Hatırla</label>
                <a className="text-white text-xs opacity-80 hover:opacity-100" href="#">Şifremi Unuttum?</a>
                </div>
            </div>
            <div className="flex flex-col gap-5 justify-center items-center pt-5">
                <button className=" w-full text-l py-1.5 px-5 bg-cyan-700 rounded-lg text-white">Giriş Yap</button>
                <h1 className="text-white text-sm">Hesabın yok mu?<Link to={"/RegisterPage"} className="font-bold opacity-80 hover:opacity-100 underline pl-1">Kayıt Ol</Link></h1>
            </div>
        </form>
        </div>
    </div>

  )
}
