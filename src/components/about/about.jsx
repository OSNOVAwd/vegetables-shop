import { AboutBanner } from "../../assets"
import Button from "../../form-elements/button/button"

const About = () => {
  return (
    <div className="h-[100vh] flex flex-col items-start justify-center gap-12">
      <div className="w-full text-center">
        <h1 className="text-3xl">About Us</h1>
        <p className="text-slate-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, ea.</p>
      </div>
      <div className="flex items-center justify-center gap-16">
        <img src={AboutBanner} alt="" />
        <div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, officiis molestiae maiores facere minus magni recusandae, suscipit aliquam fugiat perferendis nam ipsa id, maxime veniam!
          </p>
          <Button type={'text'} children={'Read More'} className="bg-green-600 text-white rounded"/>
        </div>
      </div>
    </div>
  )
}

export default About




