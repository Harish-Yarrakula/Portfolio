import React from 'react'
import useScrollAnimation from '../hooks/useScrollAnimation';

const Contact = () => {
  const contactFormRef = useScrollAnimation();
  const reviewsRef = useScrollAnimation();
  const feedbackRef = useScrollAnimation();
  const contactRef = useScrollAnimation();

  const [reviews, setReviews] = React.useState([
    { text: "Great service and amazing work!", author: "Deva" },
    { text: "Highly professional and responsive.", author: "Akshay" }
  ]);
  const [currentReviewIndex, setCurrentReviewIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReviewIndex(prevIndex => 
        prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [reviews]);

  const handleFeedbackSubmit = (e) => {
    e.preventDefault();
    const name = e.target.elements[0].value;
    const rating = e.target.elements[1].value;
    const feedback = e.target.elements[2].value;

    const newReview = {
      text: feedback,
      author: name
    };

    setReviews(prevReviews => [...prevReviews, newReview]);
    e.target.reset();
  };

  return (
    <>
      <div id='contact' className="contact w-full px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gradient mb-2 pt-4 pb-3 text-white"><u>Contact & Feedback</u></h2>
        <div className="gap-8 py-16 px-4 seccon w-full max-w-6xl">
          <div className="flex flex-col md:flex-row gap-4 w-full">
            <div ref={contactFormRef} className="animate-on-load glass-card-hover1 w-full ">
              <form className="contact-form gap-4"  action="https://formspree.io/f/mbldzrdz"
              method="POST" >
                <h3 className="section-subtitle">Get in touch with me</h3>
                <input type="text" id="name" name='name' placeholder="Your Name" required />
                <input type="email" id='mail' name='email' placeholder="Your Email" required />
                <textarea placeholder="Your Message" id='message' name='msg' rows="4" required></textarea>
                <button type="submit" className="submit-btn">Send Message</button>
              </form>
            </div>
            <div ref={contactRef} className="animate-on-load glass-card-hover1 w-full ">
              <h3 className="section-subtitle">Availability</h3>
              <div className="availability-info">
                <p>I am currently available for freelance projects.</p>
                <p>Feel free to reach out if you have any questions or opportunities!</p>
              </div>
            </div>
          </div>
          <div className="w-full inter1">
            <div ref={reviewsRef} className="reviews-section animate-on-load animation-delay-200 glass-card-hover1 m-3">
              <h3>What People Say</h3>
              <div className="reviews-grid"></div>
                <div className="review-card" key={currentReviewIndex}>
                  <p>"{reviews[currentReviewIndex].text}"</p>
                  <span className="reviewer">- {reviews[currentReviewIndex].author}</span>
                </div>
              </div>
            <div ref={feedbackRef} className="feedback-form animate-on-load animation-delay-200 glass-card-hover1 m-3">
              <form className='flex flex-col gap-4' onSubmit={handleFeedbackSubmit} >
                <h4>Leave Your Feedback</h4>
                <input type="text" placeholder="Your Name" required  />
                <select required>
                  <option value="">Rate your experience</option>
                  <option value="5">5 - Excellent</option>
                  <option value="4">4 - Very Good</option>
                  <option value="3">3 - Good</option>
                  <option value="2">2 - Fair</option>
                  <option value="1">1 - Poor</option>
                </select>
                <textarea placeholder="Your Feedback" rows="3" required></textarea>
                <button type="submit" className="submit-btn">Submit Feedback</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact