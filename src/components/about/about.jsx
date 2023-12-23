import Button from "../../form-elements/button/button"

const About = () => {
  return (
    <div className="">
      <div>
        <h1>About Us</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, ea.</p>
      </div>
      <div>
        <img src="" alt="" />
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