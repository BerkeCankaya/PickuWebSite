import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div className="w-full h-full flex items-center justify-center">
    <div className="w-[520px] max-sm:w-[90%] h-[550px] shadow-primary-shadow rounded-lg">
    <form className="form w-full h-full flex items-center flex-col gap-8 " action="">
        <div className="w-full h-[60%] flex flex-col justify-end items-center gap-5">
            <h1 className="pb-6 text-2xl text-white">PickU Dünyasına Katılın</h1>
            <div className="w-full flex items-center justify-center gap-4">
                <input className="w-[110px] text-sm text-white p-2 rounded-xl bg-transparent outline-none shadow-primary-shadow" placeholder="Ad" type="text" />
                <input className="w-[110px] text-sm text-white p-2 rounded-xl bg-transparent outline-none shadow-primary-shadow" placeholder="Soyad" type="text" />
            </div>
            <div className="w-full flex flex-col items-center justify-center gap-6">
                <input className="w-[230px] text-sm text-white p-2 rounded-xl bg-transparent outline-none shadow-primary-shadow" placeholder="Email" type="text" />
                <input className="w-[230px] text-sm text-white p-2 rounded-xl bg-transparent outline-none shadow-primary-shadow" placeholder="Şifre" type="password" />
            </div>
        </div>
        <div className="w-full h-[40%] pt-4 flex flex-col gap-5 items-center justify-start">
            <button className="w-[30%] max-sm:w-[160px] max-sm:relative text-l font-bold py-1.5 px-5 bg-cyan-700 rounded-lg text-white">Kayıt Ol</button>
            <h1 className="text-white text-sm">Zaten Hesabınız Var mı?<Link to={"/LoginPage"} className="font-bold opacity-80 hover:opacity-100 underline pl-1">Giriş Yap</Link></h1>
        </div>
       
    </form>
    </div>
</div>
  )
}
