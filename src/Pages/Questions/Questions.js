import React from 'react';
import './Questions.css';

const Questions = () => {
      return (
            <div>
                  <h1 className='qn-title'>Questions and Answer</h1>
                  <div className='qn-container'>

                        <div style={{ width: '500px' }} tabindex="0" class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                              <div class="collapse-title text-xl font-medium">
                                    What is the tools of Mason?
                              </div>
                              <div class="collapse-content">
                                    <p>Stonemason's Hammer. The traditional stonemason's hammer (or mash hammer) is a versatile two-sided hand tool that allows you to deliver two different types of strikes. ...
                                          Tape Measure and Bubble Level. ...
                                          Power Saw. ...
                                          Wire Brush. ...
                                          Mason's Trowel. ...
                                          Jointers. ...
                                          Straight Edge. ...
                                          Masonry Square.</p>
                              </div>
                        </div>
                        <div style={{ width: '500px' }} tabindex="0" class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                              <div class="collapse-title text-xl font-medium">
                                    What is the most important tool in masonry?

                              </div>
                              <div class="collapse-content">
                                    <p>
                                          Arguably the signature tool of masons, there are a few different ones that you need to be aware of. The main trowel is the V-trowel, also known as the square-notch trowel. This tool has two straight sides and another two notched sides. These are designed to dispense mortar around a flat surface at even rates.</p>
                              </div>
                        </div>
                        <div style={{ width: '500px' }} tabindex="0" class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                              <div class="collapse-title text-xl font-medium">
                                    What are mortar tools?

                              </div>
                              <div class="collapse-content">
                                    <p>Margin Trowel.
                                          V- or Square-Notch Trowel.
                                          Cold Chisel.
                                          Brick Hammer or Mason's Hammer.
                                          Wire Brush.
                                          Masonry Materials Your Should Buy.
                                          Veneer Mortar.
                                          Rebar.</p>
                              </div>
                        </div>
                  </div>
            </div>

      );
};

export default Questions;