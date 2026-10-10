import { LuCode, LuGlobe, LuDatabase, LuChartLine, LuSparkles } from 'react-icons/lu';
import BrandLogo from './BrandLogo.jsx';

const icons = { code: LuCode, globe: LuGlobe, database: LuDatabase, chart: LuChartLine, sparkles: LuSparkles };

export default function SkillGroup({ group }) {
  const Icon = icons[group.icon] || LuCode;
  const headingId = `skills-${group.id}`;
  return (
    <section className="skill-group" aria-labelledby={headingId}>
      <div className="skill-group__head">
        <Icon size={20} aria-hidden="true" />
        <h3 id={headingId}>{group.title}</h3>
      </div>
      {group.note && <p className="skill-group__note">{group.note}</p>}
      <ul className="skill-list">
        {group.items.map((item) => (
          <li key={item.name} className={item.logo ? 'skill skill--logo' : 'skill skill--text'}>
            {item.logo && <BrandLogo name={item.logo} size={30} />}
            <span>{item.name}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}