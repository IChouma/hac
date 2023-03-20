import React from 'react';
import './About.css'
import Aboutimg from '../../images/About.jpg'
function About() {
  return (
<section class="about" id="about">

    <h1 class="heading"> <span>من </span> نحن </h1>

    <div class="row">

        <div class="image">
            <img src={Aboutimg} alt=""/>
        </div>

        <div class="content">
            <h3 className='attraction'>أم العرب أم العطور</h3>
            <ul>
              <li>
            <p>أم العرب هي شركة مغربية، من الشركات الرائدة في مجال العطور الأصيلة .</p>
              </li>
              <li>
            <p>شركة متخصصة في العطور العربية الأصيلة والأصلية.</p>
              </li>
              <li>
            <p>توفر لزبنائها منتجات أصلية بجودة ممتازة وأثمنة مناسبة.</p>
              </li>
              <li>
            <p>تقدم خدمة زبناء ممتازة تساعد عملائها على اختيار المنتوجات المناسبة لهم.</p>
              </li>
              <li>
            <p className='attraction'>سمعتها في السوق ممتازة منذ إنشائها وحتى اليوم  بشهادة جميع زبنائها، لمصداقيتها في التعامل وحرصها على جودة المنتج وصحة العميل.</p>
              </li>
            </ul>
            {/* <a href="#" class="btn"></a> */}
        </div>

    </div>

</section>
  )
}

export default About
