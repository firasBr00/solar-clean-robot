export interface RobotStatus {
  batteryLevel: number;       
  cleaningProgress: number;  
  temperature: number;      
  status: 'Idle' | 'Cleaning' | 'Charging' | 'Error' | 'Maintenance'; 
  lastUpdated?: Date;       
  currentMission?: {        
    id: string;
    startTime: Date;
    estimatedEnd: Date;
  };
}