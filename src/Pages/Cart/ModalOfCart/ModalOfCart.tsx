import React from 'react';
import './ModalOfCart.scss';
import { NavLink } from 'react-router-dom';
import { ReactComponent as Close } from '../../../images/Close.svg';

interface Props {
  closeModal: () => void;
  onClear: () => void;
}

export const ModalOfCart: React.FC<Props> = ({ closeModal, onClear }) => {
  return (
    <div className="modal">
      <div className="modal__background">
        <div className="modal__container">
          <button
            type="button"
            className="modal__button  modal__button--close"
            onClick={closeModal}
          >
            <Close className="iconSvg" />
          </button>

          <div className="modal__title">
            <h1>Are you sure you want to buy?</h1>
          </div>

          <div className="modal__body">
            <p>
              After clicking button ‘Buy’ your order will be proceed
            </p>
          </div>

          <div className="modal__footer">
            <button
              type="button"
              className="modal__button modal__button--cancel"
              onClick={closeModal}
            >
              Cancel
            </button>

            <NavLink to="/phones" className="modal__link">
              <button
                type="button"
                className="modal__button"
                onClick={onClear}
              >
                Buy
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};
