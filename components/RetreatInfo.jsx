"use client";
import { ArrowUpRight, CalendarDays, MapPin } from "lucide-react";

const REGISTER = "https://kansasupci.churchtrac.com/connect?ei=HEF01AC";
const DISTRICT_EVENT = "https://kansasupci.org/events/heartland-hyphen-retreat--106/2026-11-12";
const schedule = [
  { day: "Thursday", date: "November 12", items: [
    ["6:45 PM", "Prayer"], ["7:00 PM", "General session"],
    ["9:00–11:30 PM", "HRTLAND Hang-Out", "Meal included, per the district listing"],
  ] },
  { day: "Friday", date: "November 13", items: [
    ["9:00 AM", "Devotional"], ["10:00 AM", "General session"],
    ["11:15 AM", "Lunch break", "Coffee shop exploration"],
    ["6:45 PM", "Prayer"], ["7:00 PM", "General session"],
    ["9:00–11:00 PM", "Afterburner at BRKTHROUGH", "6403 W 135th St, Suite E4 · Overland Park"],
  ] },
  { day: "Saturday", date: "November 14", items: [
    ["9:00 AM", "HRT-TALK"], ["10:00 AM", "General session"],
    ["11:15 AM", "Scheduled departure"],
  ] },
];

const questions = [
  ["Where is the retreat?", "Cross Church Kansas City, 19405 W 151st Terrace, Olathe, KS 66062. The Friday Afterburner is listed separately at BRKTHROUGH, 6403 W 135th St, Suite E4, Overland Park."],
  ["What does registration cost?", "The district listing shows early, regular and late rates, but registration prices may differ. Please confirm current fees and deadlines in ChurchTrac before paying."],
  ["Is lodging included?", "The public event listing does not confirm lodging arrangements. Check the registration form or contact the district before booking accommodations."],
  ["When should I arrive?", "The published Thursday schedule begins with prayer at 6:45 PM and a session at 7:00 PM. A specific check-in or door-opening time is not listed."],
  ["Who is the retreat for?", "This is a Hyphen young-adult ministry gathering. Please check the registration form for any event-specific eligibility requirements."],
  ["Who can answer questions?", "Kansas District UPCI lists districtsecretary@kansasupci.org and 913-231-3746 as general district contact details. Confirm registration-specific policies with the event organizer."],
];

export function RetreatAtAGlance() {
  return (
    <section className="hy-quick-facts" aria-label="Retreat essentials">
      <div className="hy-container hy-facts-grid">
        <div><span>01 / DATE</span><strong>Nov 12–14</strong><small>Thursday–Saturday · 2026</small></div>
        <div><span>02 / VENUE</span><strong>Cross Church KC</strong><small>Olathe, Kansas</small></div>
        <div><span>03 / SPEAKER</span><strong>Bruce Howell</strong><small>Guest speaker</small></div>
        <div className="hy-facts-action"><span>04 / GET IN</span><a href={REGISTER} target="_blank" rel="noopener noreferrer">Register now <ArrowUpRight size={18}/></a><small>Secure ChurchTrac registration</small></div>
      </div>
    </section>
  );
}

export function RetreatSchedule() {
  return (
    <section className="hy-section hy-schedule-section" id="schedule" aria-labelledby="schedule-title">
      <div className="hy-container">
        <span className="hy-section-kicker">Your weekend / Published district schedule</span>
        <h2 className="hy-section-title" id="schedule-title">THREE DAYS.<br/><strong>ONE PURPOSE.</strong></h2>
        <p className="hy-section-desc">All times are taken from the Kansas District's public retreat listing. Plans may change; check the official event page before traveling.</p>
        <div className="hy-schedule-grid">
          {schedule.map((day, index) => (
            <article className="hy-schedule-card" key={day.day}>
              <div className="hy-schedule-card-head">
                <span>{String(index + 1).padStart(2, "0")} / 03</span>
                <h3>{day.day}</h3>
                <small>{day.date}</small>
              </div>
              <ol>
                {day.items.map(([time, title, extra]) => (
                  <li key={time + title}>
                    <time>{time}</time>
                    <div><strong>{title}</strong>{extra && <small>{extra}</small>}</div>
                  </li>
                ))}
              </ol>
            </article>
          ))}
        </div>
        <p className="hy-schedule-source">Times supplied by <a href={DISTRICT_EVENT} target="_blank" rel="noopener noreferrer">Kansas District UPCI <ArrowUpRight size={14}/></a>. The Friday Afterburner uses a separate Overland Park address.</p>
      </div>
    </section>
  );
}

export function RetreatPlanning() {
  return (
    <section className="hy-section hy-plan" id="plan" aria-labelledby="plan-title">
      <div className="hy-container hy-plan-grid">
        <div>
          <span className="hy-section-kicker">Know before you go</span>
          <h2 className="hy-section-title" id="plan-title">PLAN YOUR<br/><strong>WEEKEND.</strong></h2>
          <p className="hy-section-desc">Answers to common questions, with final registration details through the official Kansas District signup.</p>
          <div className="hy-btn-row"><a className="hy-btn-primary" href={REGISTER} target="_blank" rel="noopener noreferrer">Open registration <ArrowUpRight size={17}/></a></div>
          <a className="hy-detail-link" href={DISTRICT_EVENT} target="_blank" rel="noopener noreferrer" style={{marginTop:26}}>Official district event page <ArrowUpRight size={17}/></a>
        </div>
        <div className="hy-faq">
          {questions.map(([question, answer], index) => (
            <details key={question} className="hy-faq-item">
              <summary><span>{String(index + 1).padStart(2, "0")}</span>{question}<span className="hy-faq-plus" aria-hidden="true">+</span></summary>
              <p>{answer}</p>
            </details>
          ))}
          <p className="hy-faq-note">For current prices, availability and registration terms, use the official ChurchTrac form.</p>
        </div>
      </div>
    </section>
  );
}
