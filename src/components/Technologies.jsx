import { SiHtml5, SiCss3, SiJavascript, SiBootstrap, SiTailwindcss, SiReact, SiGithub, SiGit } from "react-icons/si";

const Technologies = () => {
  return (
    <div className='pb-24'>
      <h2 className='my-20 text-center text-4xl'>Technologies</h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiHtml5 className='text-6xl text-orange-600' />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiCss3 className='text-6xl text-blue-500' />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiBootstrap className='text-6xl text-purple-500' />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiTailwindcss className='text-6xl text-sky-400' />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiJavascript className='text-6xl text-yellow-400' />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiReact className='text-6xl text-cyan-400' />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiGit className='text-6xl text-red-600' />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiGithub className='text-6xl text-netural-800' />
        </div>
      </div>
    </div>
  )
}

export default Technologies
