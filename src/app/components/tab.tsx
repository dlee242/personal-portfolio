export default function Tab() {
  return (
    <div role="tablist" className="tabs tabs-boxed">
      <a role="tab" className="tab">
        Career
      </a>
      <a role="tab" className="tab tab-active">
        Skills
      </a>
      <a role="tab" className="tab">
        Interests
      </a>
    </div>
  );
}
