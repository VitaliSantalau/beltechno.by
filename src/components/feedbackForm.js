import style from './feedbackForm.module.css'
import React, { useReducer, useState } from 'react'
import valid from '../utils/validFeedbackForm'
import emailjs, { init } from 'emailjs-com'
init("user_40O79S8SCPDAID55QRcBX")



function reducer(state, action) {
  switch (action.type) {
    case 'success':
      return { 
        ...state, 
        message : <div className={style.successMessage}>
                    <div>Ваше сообщение было отправлено</div>
                  </div> 
      }
    case 'error':
      return {
        ...state, 
        message : <div className={style.errorMessage}>
                    <div>Ваше сообшение не было отправлено. Попробуйте позвонить</div>
                  </div>
      }
    case 'loading':
      return {
        ...state, 
        isShowLoading: true
      }  
    case 'reset':
      return {
        ...state, 
        message: null,
        isShowLoading: false
      }  
    case 'valid':
      return {
        ...state, 
        message : <div className={style.validMessage}>
                    {action.payload}
                  </div>
      }  
    default:
      throw new Error();
  }
}

const initialState = {
  isShowLoading: false,
  validMessage: null,
  message: null
}

export default function FeedbackForm({ handleShowFeedback }) {

  const [input, setInput] = useState({ senderName: "", senderEmail: "", feedback: "" });
  const { senderName, senderEmail, feedback } = input
  const handleInput = (e) => {
    setInput({
      ...input,
      [e.target.name] : e.target.value
    })
  }

  const [state, dispatch] = useReducer(reducer, initialState)
   
  const handleSend = () => {
    const validMessage = valid(senderName, senderEmail, feedback)
    if(validMessage) {
      dispatch({ type: 'valid', payload: validMessage })
      setTimeout(() => dispatch({ type: 'reset' }), 3000)

    } else {
      dispatch({ type: 'loading' })

      emailjs.send("service_9fpesnd", "template_jxk3fme", input)
      .then(response => {
        dispatch({ type: 'success' })
        setTimeout(handleShowFeedback, 3000)
        setTimeout(() => dispatch({ type: 'reset' }), 3000)
        setInput({ senderEmail: "", feedback: "" })
  
        console.log('SUCCESS!', response.status, response.text);
        
      }, function(error) {
        dispatch({ type: 'error' })
        setTimeout(handleShowFeedback, 3000)
        setTimeout(() => dispatch({ type: 'reset' }), 3000)
        setInput({ senderName: "", senderEmail: "", feedback: "" })
        
        console.log('FAILED...', error);
      });
    }
  }

  return (
  <>
    <div className={style.form}>
      <div className={style.containerMessage}>
        <div className={style.header}>Оставить заявку</div>  
        <div className={style.underheaderText}>Мы свяжемся с Вами!</div>
        {state.message}
      </div>
      <input 
          type="text" 
          className={style.inputName}
          required
          placeholder="Ваше имя"
          name="senderName"
          value={senderName}
          onChange={handleInput}
      />  
      <input 
          type="text" 
          className={style.inputEmail}
          required
          placeholder="Ваш е-mail"
          name="senderEmail"
          value={senderEmail}
          onChange={handleInput}
      />       
      <textarea 
          className={style.inputFeedback}
          required
          placeholder="Оставить заявку / Задать вопрос"
          name="feedback"
          value={feedback}
          onChange={handleInput}
      />
      <div className={style.containerButtons}>
        {state.isShowLoading ? 
          <button className={style.buttonLoading}>
            Отправка...
          </button> :
          <button className={style.buttonSend} onClick={handleSend}>
            Отправить
          </button>
        }         
        <button onClick={handleShowFeedback} className={style.buttonClose}>
          Закрыть
        </button>
      </div>
    </div>
  </>
  )
}