import React, {useState, useEffect} from 'react';
import './assets/scss/App.scss'
import Clock from './Clock';

export default function App() {
    const getCurrentTime = () => {
        const now = new Date();

        return {
            hours: now.getHours(),
            minutes: now.getMinutes(),
            seconds: now.getSeconds(),
        }
    }

    const [currentTime, setCurrentTime] = useState(getCurrentTime());
    const [ticks, setTicks] = useState(0);

    useEffect(() => {
        // Mount 코드
        const intervalid = setInterval(() => {
            setCurrentTime(getCurrentTime());
            // 클로저기 떄문에 값이 안 바뀐다
            // tick는 0으로 한번만 설정
            // setTicks(ticks+1)
            setTicks(x => x + 1);
        }, 1000);

        // 클로저 개념
        // 사라지는 함수가 아니라면 삭제되지 않음
        // 사용되지 않는 i는 삭제되지만
        // return으로 외부로 값을 보내야하기에 함수가 계속 존재

        return () => {
            // Unmount 코드 범위
            clearInterval(intervalid);
        };
    }, []);

    return (
        ticks % 10 ?        
            <Clock
                title={`ex04: Clock Component II: ${ticks}`}
                hours={currentTime.hours}
                minutes={currentTime.minutes}
                seconds={currentTime.seconds} />
            :null
    );
}