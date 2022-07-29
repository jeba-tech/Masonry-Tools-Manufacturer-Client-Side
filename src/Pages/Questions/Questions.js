import React from 'react';
import './Questions.css';

const Questions = () => {
      return (
            <div className='qn-container'>
                  <div style={{ width: '500px' }} tabindex="0" class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                        <div class="collapse-title text-xl font-medium">
                              Focus me to see content
                        </div>
                        <div class="collapse-content">
                              <p>tabindex="0" attribute is necessary to make the div focusable</p>
                        </div>
                  </div>
                  <div style={{ width: '500px' }} tabindex="0" class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                        <div class="collapse-title text-xl font-medium">
                              Focus me to see content
                        </div>
                        <div class="collapse-content">
                              <p>tabindex="0" attribute is necessary to make the div focusable</p>
                        </div>
                  </div>
                  <div style={{ width: '500px' }} tabindex="0" class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                        <div class="collapse-title text-xl font-medium">
                              Focus me to see content
                        </div>
                        <div class="collapse-content">
                              <p>tabindex="0" attribute is necessary to make the div focusable</p>
                        </div>
                  </div>
            </div>
      );
};

export default Questions;