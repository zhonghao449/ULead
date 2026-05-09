import { useState } from 'react'
import './App.css'

function App() {
  const [activeTab, setActiveTab] = useState('dashboard')

  const projects = [
    { id: 1, title: '人工智能辅助诊断系统', university: '西安交通大学', funding: 500000, status: '募集中' },
    { id: 2, title: '新能源电池技术', university: '清华大学', funding: 1000000, status: '已完成' },
    { id: 3, title: '区块链安全协议', university: '北京大学', funding: 300000, status: '进行中' },
  ]

  return (
    <div className="app">
      <header className="header">
        <h1>ULead智链</h1>
        <p>高校科技成果转化金融服务平台</p>
      </header>
      
      <nav className="nav">
        <button 
          className={activeTab === 'dashboard' ? 'active' : ''} 
          onClick={() => setActiveTab('dashboard')}
        >
          仪表板
        </button>
        <button 
          className={activeTab === 'projects' ? 'active' : ''} 
          onClick={() => setActiveTab('projects')}
        >
          项目列表
        </button>
        <button 
          className={activeTab === 'invest' ? 'active' : ''} 
          onClick={() => setActiveTab('invest')}
        >
          投资机会
        </button>
      </nav>

      <main className="main">
        {activeTab === 'dashboard' && (
          <div className="dashboard">
            <h2>欢迎使用ULead智链</h2>
            <div className="stats">
              <div className="stat-card">
                <h3>总项目数</h3>
                <p>156</p>
              </div>
              <div className="stat-card">
                <h3>累计融资</h3>
                <p>¥2.5亿</p>
              </div>
              <div className="stat-card">
                <h3>活跃投资者</h3>
                <p>89</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'projects' && (
          <div className="projects">
            <h2>科技成果项目</h2>
            <div className="project-list">
              {projects.map(project => (
                <div key={project.id} className="project-card">
                  <h3>{project.title}</h3>
                  <p>高校：{project.university}</p>
                  <p>融资目标：¥{project.funding.toLocaleString()}</p>
                  <span className={`status ${project.status === '募集中' ? 'active' : ''}`}>
                    {project.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'invest' && (
          <div className="invest">
            <h2>投资机会</h2>
            <p>发现优质高校科技项目，参与早期投资。</p>
            <div className="investment-options">
              <div className="option">
                <h3>股权投资</h3>
                <p>成为项目股东，共享收益</p>
              </div>
              <div className="option">
                <h3>债权投资</h3>
                <p>提供资金支持，获得利息回报</p>
              </div>
              <div className="option">
                <h3>众筹投资</h3>
                <p>小额参与，支持创新项目</p>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}

export default App