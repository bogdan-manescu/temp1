import React, { useRef, useState } from "react";
import Calendar from "react-calendar";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CloseIcon from "@mui/icons-material/Close";
import "../styles/reservations.css";
import "react-calendar/dist/Calendar.css";
import { useEffect } from "react";

const CalendarWrapper = ({ value, setValue }) => (
    <Calendar
        formatMonth={(_, date) =>
            [
                "Ianuarie",
                "Februarie",
                "Martie",
                "Aprilie",
                "Mai",
                "Iunie",
                "Iulie",
                "August",
                "Septembrie",
                "Octombrie",
                "Noiembrie",
                "Decembrie",
            ][date.getMonth()]
        }
        formatMonthYear={(_, date) => {
            let year = date.getFullYear();
            return [
                `Ianuarie ${year}`,
                `Februarie ${year}`,
                `Martie ${year}`,
                `Aprilie ${year}`,
                `Mai ${year}`,
                `Iunie ${year}`,
                `Iulie ${year}`,
                `August ${year}`,
                `Septembrie ${year}`,
                `Octombrie ${year}`,
                `Noiembrie ${year}`,
                `Decembrie ${year}`,
            ][date.getMonth()];
        }}
        formatShortWeekday={(_, date) =>
            ["Dum", "Lun", "Mar", "Mie", "Joi", "Vin", "Sam"][date.getDay()]
        }
        onChange={setValue}
        value={value}
    />
);

const Reservations = () => {
    const [checkIn, setCheckIn] = useState(undefined);
    const [checkOut, setCheckOut] = useState(undefined);
    const [showCheckIn, setShowCheckIn] = useState(false);
    const [showCheckOut, setShowCheckOut] = useState(false);
    const [adults, setAdults] = useState(1);
    const [children, setChildren] = useState(0);
    const [rooms, setRooms] = useState(1);
    const calendarRefCheckIn = useRef(null);
    const calendarRefCheckOut = useRef(null);

    const handleOutsideCalendarClick = (e) => {
        if (!calendarRefCheckIn.current.contains(e.target)) {
            setShowCheckIn(false);
        } else {
            setShowCheckIn(true);
        }

        if (!calendarRefCheckOut.current.contains(e.target)) {
            setShowCheckOut(false);
        } else {
            setShowCheckOut(true);
        }
    };

    useEffect(() => {
        document.addEventListener("click", handleOutsideCalendarClick);

        return () => {
            document.removeEventListener("click", handleOutsideCalendarClick);
        };
    }, []);

    console.log();

    return (
        <div className="reservations" id="reservation">
            <div className="reservations-container" data-aos="fade-up">
                <h1 className="reservations-container-title" data-aos="fade-up">
                    TRECI PRIN ZONA? REZERVA O CAMERA!
                </h1>
                <div className="reservations-container-content" data-aos="fade-up">
                    <div ref={calendarRefCheckIn} className="reservations-container-content-item">
                        <p className="reservations-container-content-item-label">Data Check-in</p>
                        <div
                            className="reservations-container-content-item-inner"
                            onClick={() => {
                                setShowCheckIn(!showCheckIn);
                                setShowCheckOut(false);
                            }}
                        >
                            <CalendarMonthOutlinedIcon />
                            <span>
                                {checkIn !== undefined
                                    ? `${checkIn.toLocaleDateString("ro-RO")}`
                                    : "Data de Check-in"}
                            </span>
                            {showCheckIn ? <CloseIcon /> : <KeyboardArrowDownIcon />}
                        </div>
                        <div
                            className="reservations-dropdown"
                            style={
                                showCheckIn
                                    ? { opacity: "1", zIndex: "10", top: "110px" }
                                    : { opacity: "0", zIndex: "-1", top: "70px" }
                            }
                        >
                            <CalendarWrapper value={checkIn} setValue={setCheckIn} />
                        </div>
                    </div>
                    <div ref={calendarRefCheckOut} className="reservations-container-content-item">
                        <p className="reservations-container-content-item-label">Data Check-out</p>
                        <div
                            className="reservations-container-content-item-inner"
                            onClick={() => {
                                setShowCheckIn(false);
                                setShowCheckOut(!showCheckOut);
                            }}
                        >
                            <CalendarMonthOutlinedIcon />
                            <span>
                                {checkOut !== undefined
                                    ? `${checkOut.toLocaleDateString("ro-RO")}`
                                    : "Data de Check-out"}
                            </span>
                            {showCheckOut ? <CloseIcon /> : <KeyboardArrowDownIcon />}
                        </div>
                        <div
                            className="reservations-dropdown"
                            style={
                                showCheckOut
                                    ? { opacity: "1", zIndex: "10", top: "110px" }
                                    : { opacity: "0", zIndex: "-1", top: "70px" }
                            }
                        >
                            <CalendarWrapper value={checkOut} setValue={setCheckOut} />
                        </div>
                    </div>
                    <div className="reservations-container-content-item">
                        <p className="reservations-container-content-item-label">Numar adulti</p>
                        <input
                            className="reservations-container-content-item-input"
                            type="number"
                            min="1"
                            placeholder="1"
                            name="Numar adulti"
                            onChange={(e) => setAdults(e.target.value)}
                        />
                    </div>
                    <div className="reservations-container-content-item">
                        <p className="reservations-container-content-item-label">Numar copii</p>
                        <input
                            className="reservations-container-content-item-input"
                            type="number"
                            min="0"
                            placeholder="0"
                            name="Numar copii"
                            onChange={(e) => setChildren(e.target.value)}
                        />
                    </div>
                    <div className="reservations-container-content-item">
                        <p className="reservations-container-content-item-label">Numar camere</p>
                        <input
                            className="reservations-container-content-item-input"
                            type="number"
                            min="1"
                            placeholder="1"
                            name="Numar camere"
                            onChange={(e) => setRooms(e.target.value)}
                        />
                    </div>
                    <div className="reservations-container-content-item">
                        <p className="reservations-container-content-item-label">&nbsp;</p>
                        <a
                            href={`https://www.booking.com/hotel/ro/pensiunea-gabriel.ro.html?checkin=${checkIn?.getFullYear()}-${
                                checkIn?.getMonth() + 1
                            }-${checkIn?.getDate()};checkout=${checkOut?.getFullYear()}-${
                                checkOut?.getMonth() + 1
                            }-${checkOut?.getDate()};dest_id=-1156625;dest_type=city;hapos=1;hpos=1;dist=0;group_adults=${adults};req_adults=${adults};group_children=${children};req_children=${children};no_rooms=${rooms};${Array.from(
                                { length: children },
                                (el) => "req_age=12;"
                            ).join("")}`}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <button className="content-cta">REZERVA</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reservations;
