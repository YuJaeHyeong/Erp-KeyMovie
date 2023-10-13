import React, { useState, useEffect } from 'react';
import '../assets/bootstrap/css/bootstrap.min.css';
import '../assets/css/animate.min.css'
import EmpCreateComponent from "../component/EmpCreateComponent";

function Hrm() {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const [isMobile, setIsMobile] = useState(false);
    const [hoverAnimationList, setHoverAnimationList] = useState([]);

    useEffect(() => {
        const getWidth = () => {
            return window.innerWidth;
        };

        setIsMobile(getWidth() < 768);

        const elements = document.querySelectorAll('[data-bss-hover-animate]');
        setHoverAnimationList(elements);

        elements.forEach((element) => {
            element.addEventListener('mouseenter', () => {
            element.classList.add('animated', element.dataset.bssHoverAnimate);
            });
            element.addEventListener('mouseleave', () => {
            element.classList.remove('animated', element.dataset.bssHoverAnimate);
            });
        });
    }, []);

    return (
        <div>
            <div>
              <EmpCreateComponent isOpen={isModalOpen} closeModal={closeModal} />
            </div>

              <div style={{background: 'rgba(111,66,193,0)', height: '100%', width: 'Auto'}}>
                <div className="d-xxl-flex align-items-xxl-center" style={{height: '70px', paddingTop: '0px', paddingRight: '0px', paddingLeft: '0px', width: 'auto'}}><span style={{fontWeight: 'bold', fontSize: '30px', paddingLeft: '110px', paddingRight: '0px', paddingTop: '0px', paddingBottom: '13px', width: '85%'}}>인사관리</span>
                  <div style={{width: '15%', height: '100%'}}>
                    <div className="d-xxl-flex align-items-xxl-center" style={{height: '50%', width: '100%', background: 'rgba(214,51,132,0)'}}><input type="search" style={{height: '81%', width: '85%'}} /><button className="btn btn-primary" data-bss-hover-animate="pulse" type="button" style={{background: 'url("assets/img/icons8-수색-144.png") center / contain no-repeat', height: '100%', width: '15%', borderColor: 'rgba(255,255,255,0)'}} /></div>
                    <div className="d-xxl-flex justify-content-xxl-end align-items-xxl-center" style={{width: '100%', height: '50%', background: 'rgba(111,66,193,0)'}}><button className="btn btn-primary d-xxl-flex align-items-xxl-center" data-bss-hover-animate="pulse" type="button" onClick={openModal} style={{fontSize: '13px', fontWeight: 'bold', background: 'black', borderStyle: 'none', height: '80%', width: 'auto'}}>+ 직원생성</button>
                      <div style={{width: '2%', height: '100%'}} />
                    </div>
                  </div>
                </div>
                <div className="d-xxl-flex" style={{width: 'auto', height: '100%'}}>
                  <div style={{background: 'rgba(214,51,132,0)', height: '100%', width: '100%'}}>
                    <div className="d-xxl-flex justify-content-xxl-start align-items-xxl-center" style={{background: 'rgba(13,110,253,0)', height: '45px', borderTop: '2px ridge rgba(128,128,128,0.32)', borderBottom: '2px ridge rgba(128,128,128,0.32)', width: '100%'}}>
                      <div className="d-xxl-flex justify-content-xxl-start" style={{height: '100%', width: '115px'}} />
                      <div className="d-xxl-flex justify-content-xxl-start align-items-xxl-center" style={{height: '100%', width: '15%'}}><span>이름</span></div>
                      <div className="d-xxl-flex justify-content-xxl-start align-items-xxl-center" style={{height: '100%', width: '15%'}}><span>직급</span></div>
                      <div className="d-xxl-flex justify-content-xxl-start align-items-xxl-center" style={{height: '100%', width: '20%'}}><span>부서</span></div>
                      <div className="d-xxl-flex justify-content-xxl-start align-items-xxl-center" style={{height: '100%', width: '25%'}}><span>이메일</span></div>
                      <div className="d-xxl-flex justify-content-xxl-start align-items-xxl-center" style={{height: '100%', width: '15%'}}><span>재직상태</span></div>
                    </div>
                    <div style={{width: '100%', height: '20px'}} />
                    <div className="d-xxl-flex justify-content-xxl-start align-items-xxl-center" style={{background: 'rgba(13,110,253,0)', height: '45px', borderTop: '2px none rgba(128,128,128,0.32)', borderBottom: '2px none rgba(128,128,128,0.32)', width: '100%'}}>
                      <div className="d-xxl-flex justify-content-xxl-start" style={{height: '100%', width: '115px'}} />
                      <div className="d-xxl-flex justify-content-xxl-start align-items-xxl-center" style={{height: '100%', width: '15%'}}><span>엄용민</span></div>
                      <div className="d-xxl-flex justify-content-xxl-start align-items-xxl-center" style={{height: '100%', width: '15%'}}><span>대표이사</span></div>
                      <div className="d-xxl-flex justify-content-xxl-start align-items-xxl-center" style={{height: '100%', width: '20%'}}><span>무슨무슨무슨부서</span></div>
                      <div className="d-xxl-flex justify-content-xxl-start align-items-xxl-center" style={{height: '100%', width: '25%'}}><span>qwerqwe@navr.com</span></div>
                      <div className="d-xxl-flex justify-content-xxl-start align-items-xxl-center" style={{height: '100%', width: '5%'}}><span>재직중</span></div><button className="btn btn-primary text-nowrap d-xxl-flex justify-content-xxl-center align-items-xxl-center" data-bss-hover-animate="pulse" type="button" style={{fontSize: '13px', fontWeight: 'bold', background: 'var(--bs-btn-disabled-color)', width: 'auto', height: '80%', margin: '0px', padding: '0px', paddingRight: '9px', paddingLeft: '9px', color: 'black', border: '1px solid black'}}>재직상태 변경</button>
                    </div>
                    <div className="d-xxl-flex justify-content-xxl-start align-items-xxl-center" style={{background: 'rgba(13,110,253,0)', height: '45px', borderTop: '2px none rgba(128,128,128,0.32)', borderBottom: '2px none rgba(128,128,128,0.32)', width: '100%'}}>
                      <div className="d-xxl-flex justify-content-xxl-start" style={{height: '100%', width: '115px'}} />
                      <div className="d-xxl-flex justify-content-xxl-start align-items-xxl-center" style={{height: '100%', width: '15%'}}><span>엄용민</span></div>
                      <div className="d-xxl-flex justify-content-xxl-start align-items-xxl-center" style={{height: '100%', width: '15%'}}><span>대표이사</span></div>
                      <div className="d-xxl-flex justify-content-xxl-start align-items-xxl-center" style={{height: '100%', width: '20%'}}><span>무슨무슨무슨부서</span></div>
                      <div className="d-xxl-flex justify-content-xxl-start align-items-xxl-center" style={{height: '100%', width: '25%'}}><span>qwerqwe@navr.com</span></div>
                      <div className="d-xxl-flex justify-content-xxl-start align-items-xxl-center" style={{height: '100%', width: '5%'}}><span>재직중</span></div><button className="btn btn-primary text-nowrap d-xxl-flex justify-content-xxl-center align-items-xxl-center" data-bss-hover-animate="pulse" type="button" style={{fontSize: '13px', fontWeight: 'bold', background: 'var(--bs-btn-disabled-color)', width: 'auto', height: '80%', margin: '0px', padding: '0px', paddingRight: '9px', paddingLeft: '9px', color: 'black', border: '1px solid black'}}>재직상태 변경</button>
                    </div>
                    <div style={{width: '100%', height: '50px'}} />
                    <div className="d-xxl-flex justify-content-xxl-start" style={{background: 'rgba(111,66,193,0)', height: '109px'}}>
                      <div style={{width: '42%', height: '100%'}} />
                      <div className="d-xxl-flex justify-content-xxl-start align-items-xxl-center" style={{height: '100%', width: '62%'}}>
                        <nav>
                          <ul className="pagination">
                            <li className="page-item"><a className="page-link" aria-label="Previous" href="#"><span aria-hidden="true">«</span></a></li>
                            <li className="page-item"><a className="page-link" href="#">1</a></li>
                            <li className="page-item"><a className="page-link" href="#">2</a></li>
                            <li className="page-item"><a className="page-link" href="#">3</a></li>
                            <li className="page-item"><a className="page-link" href="#">4</a></li>
                            <li className="page-item"><a className="page-link" href="#">5</a></li>
                            <li className="page-item"><a className="page-link" aria-label="Next" href="#"><span aria-hidden="true">»</span></a></li>
                          </ul>
                        </nav>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

        </div>
    )
};

export default Hrm;