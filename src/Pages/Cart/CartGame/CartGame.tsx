/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, {
  useRef, useEffect, useState, useCallback,
} from 'react';
import cn from 'classnames';
import './CartGame.scss';

import cactus1 from './img/cactus/cactus1.png';
import cactus2 from './img/cactus/cactus2.png';
import cactus3 from './img/cactus/cactus3.png';
import cactus4 from './img/cactus/cactus4.png';
import cactus5 from './img/cactus/cactus5.png';
import cactus6 from './img/cactus/cactus6.png';

const cactuses = [cactus1, cactus2, cactus3, cactus4, cactus5, cactus6];

let randomCactus = Math.floor(Math.random() * 6);

export const CartGame: React.FC = () => {
  const boberPosition = useRef<HTMLDivElement>(null!);
  const cactusPosition = useRef<HTMLDivElement>(null!);
  const [isJump, setIsJump] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  const changeCactus = useCallback(() => {
    randomCactus = Math.floor(Math.random() * 6);
  }, []);

  useEffect(() => {
    const cactusElement = cactusPosition.current;

    cactusElement.addEventListener('animationiteration', changeCactus);

    return () => {
      cactusElement.removeEventListener('animationiteration', changeCactus);
    };
  });

  const finishJump = useCallback(() => {
    setIsJump(false);
  }, []);

  useEffect(() => {
    const boberElement = boberPosition.current;

    boberElement.addEventListener('animationend', finishJump);

    return () => {
      boberElement.removeEventListener('animationend', finishJump);
    };
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      const boberComputedStyle = window.getComputedStyle(boberPosition.current);
      const top = boberComputedStyle.getPropertyValue('top');
      const cactusComputedStyle = window.getComputedStyle(
        cactusPosition.current,
      );
      const left = cactusComputedStyle.getPropertyValue('left');

      const boberTop = parseInt(top, 10);
      const cactusLeft = parseInt(left, 10);

      if (cactusLeft > 0 && cactusLeft < 64 && boberTop >= 100) {
        // Game over!
        clearInterval(intervalId);
        setGameOver(true);
      }
    }, 100);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  useEffect(() => {
    const handleMouseDown = () => {
      setIsJump(true);
    };

    const handleKeyDown = (event: { keyCode: number }) => {
      if (event.keyCode === 32) {
        setIsJump(true);
      }
    };

    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('mousedown', handleMouseDown);
      document.addEventListener('keydown', handleKeyDown);
    };
  }, []);

  // Timer

  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 100);

    if (gameOver) {
      clearInterval(timer);
    }

    return () => {
      clearInterval(timer);
    };
  }, [gameOver]);

  return (
    <div className="game">
      <div className="scene">
        <div className="score">
          <div>{`${seconds} cm`}</div>
        </div>
        <div className="terrain" />
        <div
          ref={boberPosition}
          className={cn('boberPos', {
            jump: isJump,
            gameOver,
          })}
        >
          <div
            className={cn('bober', {
              gameOver,
            })}
          />
        </div>
        <div
          ref={cactusPosition}
          className={cn('cactus', {
            gameOver,
          })}
        >
          <img src={cactuses[randomCactus]} alt="" className="cactus__img" />
        </div>
      </div>
    </div>
  );
};
